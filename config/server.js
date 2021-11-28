module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env(
        'ADMIN_JWT_SECRET',
        '6fvebab2-434gfd6-47u6h-8fghsfr-bfhsh6ga51sfds'
      ),
    },
  },
});
