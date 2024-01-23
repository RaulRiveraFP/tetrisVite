// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // Directorio raíz de tu proyecto
  root: './src',
  
  // Opciones de construcción
  build: {
    outDir: 'dist',  // Carpeta de salida para los archivos generados
    assetsDir: 'assets',  // Carpeta de assets (imágenes, CSS, etc.)
  },
  
  // Configuración de alias para rutas de importación
  resolve: {
    alias: {
      '@components': '/src/components',
    },
  },
})