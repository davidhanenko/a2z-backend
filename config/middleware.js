module.exports = {
  settings: {
    cors: {
      enabled: true,
      headers: '*',
      origin: [
        'https://a2z-frontend-demo.vercel.app',
        'https://a2z-demo.herokuapp.com',
      ],
    },
  },
  // parser for images upload
};
