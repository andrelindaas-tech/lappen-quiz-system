// Utility Layer: Image Prefetching
// Preloads images in the background for instant display

const imageCache = new Map<string, HTMLImageElement>()

/**
 * Prefetch an image and cache it in memory
 * @param url - The image URL to prefetch
 * @returns Promise that resolves when image is loaded
 */
export function prefetchImage(url: string): Promise<void> {
    // Return immediately if already cached
    if (imageCache.has(url)) {
        console.log(`✅ Image already cached: ${url}`)
        return Promise.resolve()
    }

    return new Promise((resolve) => {
        const img = new Image()

        img.onload = () => {
            imageCache.set(url, img)
            console.log(`📥 Prefetched image: ${url}`)
            resolve()
        }

        img.onerror = () => {
            console.warn(`⚠️ Failed to prefetch image: ${url}`)
            // Don't reject - we want to fail gracefully
            resolve()
        }

        // Start loading the image
        img.src = url
    })
}

/**
 * Prefetch multiple images
 * @param urls - Array of image URLs to prefetch
 */
export function prefetchImages(urls: string[]): Promise<void[]> {
    return Promise.all(urls.map(url => prefetchImage(url)))
}

/**
 * Clear the image cache (useful for memory management)
 */
export function clearImageCache(): void {
    imageCache.clear()
    console.log('🗑️ Image cache cleared')
}

/**
 * Get cache statistics
 */
export function getCacheStats() {
    return {
        size: imageCache.size,
        urls: Array.from(imageCache.keys())
    }
}
