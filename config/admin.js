module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc087ed267a7da8111b6b619e565de88'),
  },
});
