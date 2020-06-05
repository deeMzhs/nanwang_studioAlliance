import Vue from 'vue'
import Router from 'vue-router'
import StudioUnionHome from '@/pages/StudioUnionHome'
import StudioMoreHome from '@/pages/StudioMoreHome'
import StudioUnion from '@/pages/StudioUnion'
import DynamicPublish from '@/pages/DynamicPublish'
import DynamicDetail from '@/pages/DynamicDetail'
import ActivityPublish from '@/pages/ActivityPublish'
import TopicPublish from '@/pages/TopicPublish'
import TopicSquare from '@/pages/TopicSquare'
import TopicDetail from '@/pages/TopicDetail'
import VotePublish from '@/pages/VotePublish'
import PersonalPage from '@/pages/personal/PersonalPage'
import PersonalLike from '@/pages/personal/PersonalLike'
import PersonalForward from '@/pages/personal/PersonalForward'
import PersonalComment from '@/pages/personal/PersonalComment'
import InnovationIndex from '@/pages/Innovation/index'
import InnovationSearch from '@/pages/Innovation/search'
import InnovationDetail from '@/pages/Innovation/detail'
import TechnologyHome from '@/pages/technology/TechnologyHome'


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
      path: '/personalPage',
      name: 'personalPage',
      component: PersonalPage
    },
    {
      path: '/personalLike',
      name: 'personalLike',
      component: PersonalLike,
    },
    {
      path: '/personalForward',
      name: 'personalForward',
      component: PersonalForward,
    },
    {
      path: '/personalComment',
      name: 'personalComment',
      component: PersonalComment,
    },
    {
      path: '/InnovationIndex',
      name: 'InnovationIndex',
      component: InnovationIndex,
    },
    {
      path: '/InnovationSearch',
      name: 'InnovationSearch',
      component: InnovationSearch,
    },
    {
      path: '/InnovationDetail',
      name: 'InnovationDetail',
      component: InnovationDetail,
    },
    //技术问诊
    {
      path: '/technologyHome',
      name: 'technologyHome',
      component: TechnologyHome,
    },
  ]
})
