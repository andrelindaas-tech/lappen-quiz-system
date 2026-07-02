// Server-side rendering entry — used ONLY at build time by scripts/prerender.mjs.
// Renders the app for a given URL so we can write static HTML per route (SSG).
import React from 'react'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import App from './App'

export interface HelmetServerOutput {
    helmet?: HelmetServerState | null
}

/**
 * Create the React element tree for a given URL plus the helmet context
 * that will be populated with <title>/<meta> tags during rendering.
 */
export function createApp(url: string) {
    const helmetContext: HelmetServerOutput = {}
    const app = (
        <React.StrictMode>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </HelmetProvider>
        </React.StrictMode>
    )
    return { app, helmetContext }
}
