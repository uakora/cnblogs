module.exports = {  
  base: '/cnblogs/',
  title: '梦魄心魂的博客',
  head: [
    ['link', { rel: 'icon', href: 'favicon.png'}],
  ],
  themeConfig: {
    logo: 'logo.png',
    nav: [
      { text: '首页', link: '/'},
      { text: '技术文档', link: '/nginx/'},
      { text: '博客园主页', link: 'https://www.cnblogs.com/uakora/'},
    ],
    sidebar: 'auto',
  },
};