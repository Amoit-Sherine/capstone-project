export function createBackgroundCircles() {
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        const size = 100; // Circle size
        // Ensure circles fit within the viewport
        const maxX = window.innerWidth - size;
        const maxY = window.innerHeight - size;

        Object.assign(circle.style, {
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            gap: '20px',
            position: 'absolute',
            backgroundColor: 'white',
            backgroundSize: 'cover',
            top: `${Math.random() * maxY}px`, // Adjusted to prevent overflow
            left: `${Math.random() * maxX}px`, // Adjusted to prevent overflow
            zIndex: '-1',
        });
        document.body.appendChild(circle);
    }
}
