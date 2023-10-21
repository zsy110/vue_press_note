import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
    title: '博客狐',
    description: '文档、笔记',
    head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索文档',
                },
            },
            hotKeys: ['k', 'ctrl'],
            maxSuggestions: 10,
            isSearchable: (page) => page.path !== '/',
        }),
    ]
});


