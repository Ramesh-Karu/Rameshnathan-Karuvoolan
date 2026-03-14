import React, { useEffect, useRef } from 'react';

export const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random positions above the screen
    }

    const chars = '01';

    const draw = () => {
      // Semi-transparent black to create the trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Set text color and font
      ctx.fillStyle = 'rgba(0, 240, 255, 0.15)'; // Neon cyan with low opacity for "shadow" effect
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        // Randomly choose 0 or 1
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Calculate x and y coordinates
        const x = i * fontSize + fontSize / 2;
        const y = drops[i] * fontSize;

        // Occasionally draw a "glowing" character
        if (Math.random() > 0.98) {
          ctx.fillStyle = 'rgba(0, 242, 255, 0.8)';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00f2ff';
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = 'rgba(188, 19, 254, 0.5)'; // Neon purple
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = 'rgba(0, 242, 255, 0.15)';
          ctx.shadowBlur = 0;
        }

        // Draw the character
        ctx.fillText(text, x, y);

        // Reset drop to top randomly or if it goes off screen
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    let animationFrameId: number;
    let lastDrawTime = 0;
    const fps = 30; // Control speed of the matrix rain
    const interval = 1000 / fps;

    const render = (timestamp: number) => {
      if (timestamp - lastDrawTime > interval) {
        draw();
        lastDrawTime = timestamp;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Re-initialize drops array if screen gets wider
      const newColumns = Math.floor(width / fontSize);
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -100;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: -5, mixBlendMode: 'screen' }}
    />
  );
};
