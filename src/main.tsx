// Main Entry Point
import '@fontsource-variable/inter'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

const container = document.getElementById('root')!
const app = (
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
)

// Prerendered pages (SSG) get hydrated; dev / non-prerendered pages render from scratch
if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, app)
} else {
    ReactDOM.createRoot(container).render(app)
}
