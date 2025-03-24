import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { globeConfig } from '../data/globe';

const Scene = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={globeConfig.controls.autoRotateSpeed}
      />
      <ambientLight intensity={theme === 'dark' ? 1.5 : 2} />
      {globeConfig.lights.map((light, index) => (
        <directionalLight
          key={index}
          position={new THREE.Vector3(...light.position)}
          intensity={theme === 'dark' ? light.intensity : light.intensity * 1.2}
        />
      ))}
      <mesh>
        <sphereGeometry args={[globeConfig.globe.radius, globeConfig.globe.segments, globeConfig.globe.segments]} />
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            theme === 'dark' ? globeConfig.textures.dark.earth : globeConfig.textures.light.earth
          )}
          normalMap={new THREE.TextureLoader().load(
            theme === 'dark' ? globeConfig.textures.dark.bump : globeConfig.textures.light.bump
          )}
          roughnessMap={new THREE.TextureLoader().load(
            theme === 'dark' ? globeConfig.textures.dark.specular : globeConfig.textures.light.specular
          )}
          roughness={theme === 'dark' ? 0.5 : 0.7}
          metalness={theme === 'dark' ? 0.1 : 0.2}
        />
      </mesh>
    </>
  );
};

const Globe: React.FC = () => {
  const { theme } = useTheme();
  const isMobile = window.innerWidth < 768;

  return (
    <div className="relative w-full h-[30vh] md:h-[50vh] bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 150 : globeConfig.camera.position],
          fov: isMobile ? 60 : globeConfig.camera.fov,
          near: globeConfig.camera.near,
          far: globeConfig.camera.far
        }}
      >
        <Scene />
      </Canvas>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4"
      >
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-900 dark:text-white transition-colors duration-300">
          Ultimate Experiences With Premium Technology Services
        </h2>
      </motion.div>
    </div>
  );
};

export default Globe;