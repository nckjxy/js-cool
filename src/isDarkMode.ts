/**
 * Determine if dark color mode
 *
 * @returns - result
 */
function isDarkMode(): boolean {
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default isDarkMode
