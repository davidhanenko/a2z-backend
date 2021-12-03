module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {
      settings: {
        methods: ['GET', 'POST', 'HEAD'],
        cors: {
          origin: [
            'https://a2z-frontend-demo.vercel.app',
            'https://a2z-demo.herokuapp.com',
          ],
        },
        load: {
          before: ['responseTime', 'logger', 'cors', 'responses'],
          order: [
            "Define the middlewares' load order by putting their name in this array in the right order",
          ],
          after: ['parser', 'router'],
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
  }

  return {
    settings: {
      cors: {
        origin: ['http://localhost:1337', 'http://localhost:7777'],
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
};
