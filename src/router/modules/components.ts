import { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/router/constant'

/**
 * 组件模块
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 * @param meta.affix 多页签固定
 * @param meta.requiresAuth 是否需要权限
 * @param meta.alwaysShow 是否总是显示
 * */
const componentsRouter: Array<RouteRecordRaw> = [
  {
    path: '/components',
    name: 'Components',
    meta: {
      title: '组件',
      icon: '',
      sort: 0,
      permissions: ['ComponentsIndex'],
      requiresAuth: true,
    },
    redirect: '/components/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'ComponentsIndex',
        meta: {
          title: '组件',
          permissions: ['ComponentsIndex'],
          affix: true,
          requiresAuth: true,
        },
        component: () => import('@/views/components/IndexPage.vue'),
      },
    ],
  },
]

export default componentsRouter
