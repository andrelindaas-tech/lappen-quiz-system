import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { google } from "googleapis";

// Initialiser Google Search Console API-klienten
// GoogleAuth vil automatisk bruke GOOGLE_APPLICATION_CREDENTIALS miljøvariabelen
const auth = new google.auth.GoogleAuth({
  scopes: [
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/webmasters"
  ]
});

const searchConsoleClient = google.searchconsole({
  version: "v1",
  auth: auth
});

// Opprett MCP-serveren
const server = new Server(
  {
    name: "google-search-console",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Registrer verktøyene (tools) som AI-en kan kalle
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_verified_sites",
        description: "Lister opp alle nettsteder/eiendommer som tjenestekontoen har tilgang til i Google Search Console.",
        inputSchema: {
          type: "object",
          properties: {}
        }
      },
      {
        name: "get_search_analytics",
        description: "Henter søkeytelsesdata (klikk, visninger, CTR, posisjon) for en eiendom over en gitt tidsperiode.",
        inputSchema: {
          type: "object",
          properties: {
            siteUrl: {
              type: "string",
              description: "URL-en til nettstedet slik det er registrert i Search Console (f.eks. 'https://teori-test.no/' eller 'sc-domain:teori-test.no')."
            },
            startDate: {
              type: "string",
              description: "Startdato i formatet YYYY-MM-DD (f.eks. '2026-05-01')."
            },
            endDate: {
              type: "string",
              description: "Sluttdato i formatet YYYY-MM-DD (f.eks. '2026-05-31')."
            },
            dimensions: {
              type: "array",
              items: {
                type: "string",
                enum: ["query", "page", "country", "device", "searchAppearance"]
              },
              description: "Dimensjoner å gruppere data etter (f.eks. ['query'] for søkeord eller ['page'] for sider)."
            },
            rowLimit: {
              type: "integer",
              description: "Maksimalt antall rader som skal returneres (standard er 100, maks 25000)."
            }
          },
          required: ["siteUrl", "startDate", "endDate"]
        }
      },
      {
        name: "submit_sitemap",
        description: "Sender inn en oppdatert sitemap-fil til Google Search Console.",
        inputSchema: {
          type: "object",
          properties: {
            siteUrl: {
              type: "string",
              description: "URL-en til nettstedet (f.eks. 'https://teori-test.no/')."
            },
            feedpath: {
              type: "string",
              description: "Fullstendig URL til sitemap-filen (f.eks. 'https://teori-test.no/sitemap.xml')."
            }
          },
          required: ["siteUrl", "feedpath"]
        }
      }
    ]
  };
});

// Håndter kjøring av verktøy
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "list_verified_sites": {
        const response = await searchConsoleClient.sites.list();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response.data.siteEntry || [], null, 2)
            }
          ]
        };
      }

      case "get_search_analytics": {
        const { siteUrl, startDate, endDate, dimensions = ["query"], rowLimit = 100 } = args;

        const response = await searchConsoleClient.searchanalytics.query({
          siteUrl: siteUrl,
          requestBody: {
            startDate: startDate,
            endDate: endDate,
            dimensions: dimensions,
            rowLimit: rowLimit
          }
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(response.data.rows || [], null, 2)
            }
          ]
        };
      }

      case "submit_sitemap": {
        const { siteUrl, feedpath } = args;

        await searchConsoleClient.sitemaps.submit({
          siteUrl: siteUrl,
          feedpath: feedpath
        });

        return {
          content: [
            {
              type: "text",
              text: `Sitemap '${feedpath}' ble vellykket sendt inn til Google Search Console for eiendommen '${siteUrl}'.`
            }
          ]
        };
      }

      default:
        throw new Error(`Ukjent verktøy: ${name}`);
    }
  } catch (error) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Feil under kjøring av verktøyet '${name}': ${error.message}`
        }
      ]
    };
  }
});

// Start serveren med Stdio-transport
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Google Search Console MCP server running on stdio");
