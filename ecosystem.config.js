module.exports = {
    apps: [
      {
        name: 'frontend',
        script: 'pwsh',
        args: '-Command npx vite',
        cwd: './frontend',  // Adjust the path to your SvelteKit frontend
      },
      {
        name: 'backend',
        script: 'go',
        args: 'run server.go',
        cwd: './backend',  // Adjust the path to your Go backend
      },
    ],
};