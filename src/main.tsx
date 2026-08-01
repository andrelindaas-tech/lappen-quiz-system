// Main Entry Point
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

const container = document.getElementById('root')!
const normalizePath = (path: string) => path === '/' ? '/' : path.replace(/\/+$/, '')
const app = (
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
)

// Hydrate only when the static HTML belongs to the route being opened. Routes
// outside the sitemap receive dist/index.html through the SPA fallback; that is
// homepage HTML and must be replaced instead of hydrated as another route.
const prerenderPath = container.dataset.prerenderPath
const isMatchingPrerender = container.hasChildNodes()
    && prerenderPath === normalizePath(window.location.pathname)

if (isMatchingPrerender) {
    ReactDOM.hydrateRoot(container, app)
} else {
    container.replaceChildren()
    ReactDOM.createRoot(container).render(app)
}
