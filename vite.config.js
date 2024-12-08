export default async function() {
    const { svelte } = await import('@sveltejs/vite-plugin-svelte')
    
    return {
      plugins: [svelte()],
      resolve: {
        alias: {
          '@': '/src'
        }
      },
      build: {
        outDir: 'dist',
        rollupOptions: {}
      },
      server: {
        port: 3000,
        open: true
      }
    }
  }