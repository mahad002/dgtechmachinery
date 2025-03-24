export const globeConfig = {
  camera: {
    fov: 45,
    near: 1,
    far: 600,
    position: 150
  },
  controls: {
    rotateSpeed: 0.8,
    minDistance: 100,
    maxDistance: 200,
    autoRotateSpeed: 1
  },
  globe: {
    radius: 45,
    segments: 64
  },
  lights: [
    { position: [1, 1, 1], intensity: 0.8 },
    { position: [-1, -1, 1], intensity: 0.5 },
    { position: [1, -1, -1], intensity: 0.3 }
  ],
  textures: {
    dark: {
      earth: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
      bump: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
      specular: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'
    },
    light: {
      earth: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_day_4096.jpg',
      bump: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
      specular: 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'
    }
  }
};