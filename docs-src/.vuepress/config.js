module.exports = {
  base: '/lw-chart-docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'lw-chart',
      description: '一个由canvas实现的轻量级图表'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'lw-chart',
    //   description: 'A lightweight chart implemented by canvas'
    // }
  },
  head: [
    ['link', { rel: 'icon', href: '/imgs/lw-chart.png' }]
  ],
  themeConfig: {
    smoothScroll: true,
    logo: '/imgs/lw-chart.png',
    locales: {
      '/': {
        sidebar: 'auto',
        sidebarDepth: 3,
        selectText: '选择语言',
        label: '简体中文',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: {
          '/guide/': [
            ''
          ],
          '/config/': [
            '',
            'LWChart',
            'Axis',
            'Area'
          ],
          '/demo/': [
            ''
          ]
        },
        nav: [
          {
            text: '快速上手',
            link: '/guide/'
          },
          {
            text: '配置',
            link: '/config/'
          },
          {
            text: '案例',
            link: '/demo/'
          },
          {
            text: '联系作者',
            items: [
              { text: '公众号', link: 'https://ad-feiben.github.io/imgs/qrcode.png' },
              { text: '掘金', link: 'https://juejin.im/user/58d3ab5b128fe1006cb236e1' },
              { text: '知乎', link: 'https://www.zhihu.com/people/fei-ben-3-68' },
              { text: '简书', link: 'https://www.jianshu.com/u/ccb05861b473' },
            ]
          },
          {
            text: 'Github',
            link: 'https://www.github.com/ad-feiben/lw-chart'
          }
        ]
      },
      // '/en/': {
      //   sidebar: 'auto',
      //   sidebarDepth: 2,
      //   selectText: 'Languages',
      //   label: 'English',
      //   serviceWorker: {
      //     updatePopup: {
      //       message: "New content is available.",
      //       buttonText: "Refresh"
      //     }
      //   },
      //   sidebar: {
      //     '/en/guide/': [
      //       ''
      //     ],
      //     '/en/config/': [
      //       ''
      //     ]
      //   },
      //   nav: [
      //     {
      //       text: 'Guide',
      //       link: '/en/guide/'
      //     },
      //     {
      //       text: 'Config',
      //       link: '/en/config/'
      //     },
      //     {
      //       text: 'Github',
      //       link: 'https://www.github.com/ad-feiben/lw-chart'
      //     }
      //   ]
      // }
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'run',
      {
        jsLabs: ['https://www.fedevelop.cn/lw-chart/dist/Area.js']
      }
    ]
  ],
};
