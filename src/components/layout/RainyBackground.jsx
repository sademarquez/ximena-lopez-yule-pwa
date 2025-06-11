import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RainyBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Creación de partículas
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color("#FFD700"); // Dorado
    const colorPurple = new THREE.Color("#8A2BE2"); // Morado

    for (let i = 0; i < particleCount; i++) {
      // Posición inicial aleatoria
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = Math.random() * 20;      // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z

      // Asignar color (mezcla de morado y dorado)
      const mixedColor = Math.random() > 0.5 ? colorGold : colorPurple;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.7
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    // Animación de la lluvia
    const animate = () => {
      requestAnimationFrame(animate);

      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        // Mover partícula hacia abajo
        positions[i * 3 + 1] -= 0.01;

        // Si la partícula sale por abajo, la reposicionamos arriba
        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 10;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    animate();

    // Manejar redimensionamiento de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
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