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
        text: '数据库',
        children: [
            {
                text: 'mysql',
                children: [
                    {
                        text: 'mysql配置相关',
                        link: '/md/数据库/mysql/mysql配置相关.md'
                    },
                    {
                        text: 'mysql常用语句',
                        link: '/md/数据库/mysql/mysql常用语句.md'
                    },
                ]
            },
            {
                text: 'Redis',
                children: [
                    {
                        text: 'Redis基础',
                        link: '/md/数据库/Redis/Redis基础.md'
                    },
                ]
            },
            {
                text: 'oracle',
                children: [
                    {
                        text: 'oracle基础使用',
                        link: '/md/数据库/oracle/oracle基础使用.md'
                    },
                ]
            },
        ]
    },
    {
        text: 'Docker',
        children: [
            {
                text: 'Docker基础',
                children: [
                    {
                        text: 'docker常见问题',
                        link: '/md/docker/docker常见问题.md'
                    },
                ]
            },
        ]
    },
    {
        text: '网关',
        children: [
            {
                text: 'nginx',
                children: [
                    {
                        text: 'nginx基础',
                        link: '/md/网关/nginx/nginx基础.md'
                    },
                    {
                        text: 'nginx安全加固',
                        link: '/md/网关/nginx/nginx安全加固.md'
                    },
                ]
            },
        ]
    },
    {
        text: 'Spring',
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
            text: 'Git',
            children: [{
                text: 'Git常用配置与使用',
                link: '/md/tools/Git常用配置与使用.md'
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
        ]
    },
    {
        text: '关于',
        link: '/md/feedback/about.md'
    },
    {
        text: '错误反馈',
        link: '/md/feedback/feedback.md'
    },
]
