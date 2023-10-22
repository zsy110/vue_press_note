module.exports = [
    {
        text: '主页',
        link: '/'
    },
    {
        text: 'Java',
        children: [
            {
                text: 'java基础知识',
                children: [
                    {
                        text: 'java基础',
                        link: '/md/java/java基础.md'
                    },
                    {
                        text: 'java常用知识点',
                        link: '/md/java/java知识点.md'
                    }
                ]
            },
        ]
    },
    {
        text: 'Linux',
        children: [
            {
                text: 'linux基础',
                children: [
                    {
                        text: 'linux简单使用',
                        link: '/md/linux/linux基础使用.md'
                    },
                ]
            },
        ]
    },
    {
        text: '开发工具',
        children: [{
            text: '在线编辑',
            children: [{
                text: '图片压缩',
                link: 'https://tinypng.com/'
            }]
        },
        {
            text: '在线服务',
            children: [{
                text: '阿里云',
                link: 'https://www.aliyun.com/'
            },
            {
                text: '腾讯云',
                link: 'https://cloud.tencent.com/'
            }
            ]
        },
        {
            text: '博客指南',
            children: [{
                text: '掘金',
                link: 'https://juejin.im/'
            },
            {
                text: 'CSDN',
                link: 'https://blog.csdn.net/'
            }
            ]
        }
        ]
    },
    {
        text: '关于',
        link: '/md/about.md'
    },
    {
        text: '错误反馈',
        link: '/md/feedback/'
    },
]
