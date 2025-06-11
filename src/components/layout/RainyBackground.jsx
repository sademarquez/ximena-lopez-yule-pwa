import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RainyBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, particleSystem;
    let animationFrameId;

    const init = () => {
      // Escena, cámara y renderizador
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Creación de la lluvia dorada
      const particleCount = 7000; // Más partículas para un efecto más denso
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      const colorGold = new THREE.Color("#FFD700");

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 30; // x
        positions[i * 3 + 1] = Math.random() * 20;      // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
      }

      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: colorGold,
        size: 0.02,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending, // Efecto de brillo cuando se superponen
      });

      particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      camera.position.z = 10;
    };

    // Animación
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!particleSystem || !renderer || !scene || !camera) return;

      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Mover partícula hacia abajo
        positions[i + 1] -= 0.015;

        // Si la partícula sale por abajo, la reposicionamos arriba
        if (positions[i + 1] < -10) {
          positions[i + 1] = 10;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      
      // Rotación sutil para dar más profundidad
      particleSystem.rotation.y += 0.0001;

      renderer.render(scene, camera);
    };

    // Manejar redimensionamiento de la ventana
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    init();
    animate();
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }} 
    />
  );
};

export default RainyBackground;