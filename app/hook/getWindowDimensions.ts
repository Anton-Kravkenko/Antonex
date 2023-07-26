import { useEffect, useState } from 'react'

export function useWindowSize() {
	const [windowSize, setWindowSize] = useState<{width: number | undefined}>({
		width: undefined,
	});
	
	useEffect(() => {
		if (typeof window === 'undefined') return
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
			});
		}
		
		// Add event listener
		window.addEventListener("resize", handleResize);
		
		// Call handler right away so state gets updated with initial window size
		handleResize();
		
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}