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
  parser: {
    enabled: true,
    multipart: true,
    formidable: {
      maxFileSize: 10 * 1024 * 1024,
    },
  },
};
