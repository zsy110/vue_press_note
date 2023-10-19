// .vuepress/config.js
module.exports = {
    themeConfig: {
      logo: '/assets/img/logo_导航.png',
      nav: [
        {
          text: 'Languages',
          ariaLabel: 'Language Menu',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        }
      ]
    }
  }