module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
    breakpoints: {
      xsmall: 320,
    },
    actionOptions: {
      upload: {
        transformation: {
          width: 1920,
        },
        fetch_format: 'auto',
        quality: 'auto',
        resource_type: 'auto',
        folder: 'A2Z',
      },
      delete: {},
    },
  },

  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST'),
      port: env('SMTP_PORT', 587),
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: 'a2z@example.com',
      defaultReplyTo: 'a2z1@example.com',
    },
  },
});
