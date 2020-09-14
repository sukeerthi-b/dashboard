var PROXY_CONFIG = [
  {
    context: [
      '/bookmarks',
      '/groups',
      '/bookmarks/groups'
    ],
    target: 'http://localhost:3000',
    secure: false,
  },
];
module.exports = PROXY_CONFIG
