import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteAliases({
            dir: 'src', // Directorio base donde se buscarán las carpetas
            prefix: '@', // Prefijo para los alias de rutas
            deep: true, // Permite buscar en subdirectorios
            depth: 1, // Nivel de profundidad para la búsqueda de subdirectorios (1 para el primer nivel)
            createGlobalAlias: false, // Crea un alias global para el directorio del proyecto
        }),
    ],
});
