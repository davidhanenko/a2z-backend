module.exports = {
  settings: {
    cors: {
      origin: [
        'https://a2z-frontend-demo.vercel.app',
        'https://a2z-backend-demo.herokuapp.com',
        'http://localhost:1337',
        'http://localhost:7777',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
    },
  },
};
