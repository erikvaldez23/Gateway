import { useState, useEffect } from 'react';

export default function FuturisticBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  
  // Generate initial particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 25; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    setParticles(newParticles);
  }, []);

  // Update particles position
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dynamic gradient position based on mouse
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #c9b49a 0%, rgba(201, 180, 154, 0.4) 25%, rgba(0, 0, 0, 0.95) 70%)`,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Main gradient background */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-500 ease-out"
        style={gradientStyle}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 w-full h-full opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(201, 180, 154, 0.3) 25%, rgba(201, 180, 154, 0.3) 26%, transparent 27%, transparent 74%, rgba(201, 180, 154, 0.3) 75%, rgba(201, 180, 154, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(201, 180, 154, 0.3) 25%, rgba(201, 180, 154, 0.3) 26%, transparent 27%, transparent 74%, rgba(201, 180, 154, 0.3) 75%, rgba(201, 180, 154, 0.3) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating particles */}
      {particles.map((particle, index) => (
        <div 
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#c9b49a',
            opacity: particle.opacity,
            boxShadow: '0 0 10px rgba(201, 180, 154, 0.6)',
            transition: 'all 0.5s ease-out'
          }}
        />
      ))}
      
      {/* Horizontal lines for futuristic effect */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-30" />
      <div className="absolute inset-x-0 top-2/4 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-30" />
      <div className="absolute inset-x-0 top-3/4 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent opacity-30" />
      
      {/* Optional content overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-6xl font-bold text-amber-100 opacity-80">FUTURISTIC</h1>
      </div>
    </div>
  );
}