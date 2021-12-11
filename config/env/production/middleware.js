module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        'https://a2z-frontend-demo.vercel.app',
        'https://a2z-demo.herokuapp.com',
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
    },
    // 10 Mb max upload file size
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 10 * 1024 * 1024,
      },
    },
  },
};
