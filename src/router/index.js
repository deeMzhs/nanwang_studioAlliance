import Vue from 'vue'
import Router from 'vue-router'
import StudioUnionHome from '@/pages/StudioUnionHome'
import StudioMoreHome from '@/pages/StudioMoreHome2'
import StudioUnion from '@/pages/StudioUnion'
import DynamicPublish from '@/pages/DynamicPublish'
import DynamicDetail from '@/pages/DynamicDetail'
import ActivityPublish from '@/pages/ActivityPublish'
import TopicPublish from '@/pages/TopicPublish'
import TopicSquare from '@/pages/TopicSquare'
import TopicDetail from '@/pages/TopicDetail'
import VotePublish from '@/pages/VotePublish'
import ProFile from '@/pages/ProFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StudioUnionHome',
      component: StudioUnionHome
    },
    {
      path: '/studioUnionHome',
      name: 'StudioUnionHome',
      component: StudioUnionHome
    },
    {
      path: '/studioMoreHome',
      name: 'StudioMoreHome',
      component: StudioMoreHome
    },
    {
      path: '/studioUnion',
      name: 'StudioUnion',
      component: StudioUnion
    },
    {
      path: '/dynamicPublish',
      name: 'DynamicPublish',
      component: DynamicPublish
    },
    {
      path: '/dynamicDetail',
      name: 'DynamicDetail',
      component: DynamicDetail
    },
    {
      path: '/activityPublish',
      name: 'ActivityPublish',
      component: ActivityPublish
    },
    {
      path: '/topicPublish',
      name: 'TopicPublish',
      component: TopicPublish
    },
    {
      path: '/topicSquare',
      name: 'TopicSquare',
      component: TopicSquare
    },
    {
      path: '/topicDetail',
      name: 'TopicDetail',
      component: TopicDetail
    },
    {
      path: '/votePublish',
      name: 'VotePublish',
      component: VotePublish
    },
    {
      path: '/proFile',
      name: 'ProFile',
      component: ProFile
    }
  ]
})
