module.exports = {
  // Otros plugins...
  'users-permissions': {
    jwtSecret: process.env.jwtSecret || 'your-default-jwtSecret', // Opcional: agrega un valor predeterminado para desarrollo
  },
};