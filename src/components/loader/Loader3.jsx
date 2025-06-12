import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const SciFiLoader = () => {
  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-20, -40, -20],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.cos((i / 20) * Math.PI * 2) * 150,
    y: Math.sin((i / 20) * Math.PI * 2) * 150,
    delay: i * 0.1
  }));

  return (
    <Box
      sx={{
        bgcolor: 'grey.900',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          width: 384,
          height: 384,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Background glow */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.2), transparent 80%)',
            filter: 'blur(40px)'
          }}
        />

        {/* Outer orbit ring */}
        <motion.div
          variants={orbitVariants}
          animate="animate"
          style={{
            position: 'absolute',
            width: 320,
            height: 320,
            borderRadius: '50%',
            border: '1px solid rgba(34,211,238,0.3)',
            background: 'conic-gradient(from 0deg, transparent, rgba(34, 211, 238, 0.1), transparent)'
          }}
        />

        {/* Middle orbit ring */}
        <motion.div
          variants={spinVariants}
          animate="animate"
          style={{
            position: 'absolute',
            width: 240,
            height: 240,
            borderRadius: '50%',
            border: '1px solid rgba(34,211,238,0.4)',
            background: 'conic-gradient(from 180deg, transparent, rgba(34, 211, 238, 0.2), transparent)'
          }}
        />

        {/* Inner orbit ring */}
        <motion.div
          variants={orbitVariants}
          animate="animate"
          style={{
            position: 'absolute',
            width: 160,
            height: 160,
            borderRadius: '50%',
            border: '1px solid rgba(34,211,238,0.5)',
            animationDirection: 'reverse'
          }}
        />

        {/* Central core */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          style={{
            position: 'relative',
            width: 96,
            height: 96,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, #00eaff, #0288d1, #01579b)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}
        >
          {/* Iris pattern lines */}
          {Array.from({ length: 12 }, (_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(to right, transparent, #b2ebf2, transparent)',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                opacity: 0.6
              }}
            />
          ))}

          {/* Central dark spot */}
          <Box
            sx={{
              position: 'absolute',
              width: 24,
              height: 24,
              borderRadius: '50%',
              bgcolor: 'grey.900',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: 'inset 0 0 10px #000'
            }}
          />
        </motion.div>

        {/* Floating orbiting particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            variants={particleVariants}
            animate="animate"
            transition={{
              ...particleVariants.animate.transition,
              delay: particle.delay
            }}
            style={{
              position: 'absolute',
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: '#00eaff',
              boxShadow: '0 0 4px #00eaff',
              left: `calc(50% + ${particle.x}px)`,
              top: `calc(50% + ${particle.y}px)`
            }}
          />
        ))}

        {/* Additional scattered particles */}
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={`scatter-${i}`}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              position: 'absolute',
              width: 2,
              height: 2,
              borderRadius: '50%',
              backgroundColor: '#4dd0e1',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Rotating accents */}
        <motion.div
          variants={spinVariants}
          animate="animate"
          style={{
            position: 'absolute',
            width: 288,
            height: 288
          }}
        >
          {Array.from({ length: 6 }, (_, i) => (
            <Box
              key={i}
              sx={{
                position: 'absolute',
                width: 8,
                height: 24,
                background: 'linear-gradient(to top, #00eaff, transparent)',
                borderRadius: 4,
                left: '50%',
                top: 10,
                transform: `translateX(-50%) rotate(${i * 60}deg)`,
                transformOrigin: '50% 134px'
              }}
            />
          ))}
        </motion.div>
      </Box>

      {/* Loading text */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: 80
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: '#00eaff',
            fontWeight: 300,
            letterSpacing: 2
          }}
        >
          Loading...
        </Typography>
      </motion.div>
    </Box>
  );
};

export default SciFiLoader;
