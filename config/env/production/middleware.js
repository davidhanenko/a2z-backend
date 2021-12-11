module.exports = {
  settings: {
    cors: {
      origin: [
        'https://a2z-frontend-demo.vercel.app',
        'https://a2z-demo.herokuapp.com',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
    },
  },
};
