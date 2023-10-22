import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import navbar from './config/navbar'
export default defineUserConfig({
    title: '博客狐',
    description: '文档、笔记',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/images/logo.png'
            }],
        [
            "meta",
            {
                name: "referrer",
                content: "no-referrer"
            }
        ],],
    theme: defaultTheme({
        navbar,
        sidebar: "auto",
        sidebarDepth: 4,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
    }),
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

    ],

});


