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
import Innovate from '@/pages/Innovate'
import TechnologyHome from '@/pages/technology/TechnologyHome'
import TechnologyQuestions from '@/pages/technology/questions'
import TechnologyDetail from '@/pages/technology/detail'
import TechAnswers from '@/pages/technology/like'
import TechForward from '@/pages/technology/TechForward'
import TechFollow from '@/pages/technology/TechFollow'
import TechAnswer from '@/pages/technology/Answer'
import TechInvitation from '@/pages/technology/Invitation'
import StudioUnionDetail from '@/pages/StudioUnionDetail'
import VoteGraphic from '@/pages/vote/graphic'
import VoteProgress from '@/pages/vote/progress'
import StudioInfo from '@/pages/StudioInfo'
import studioMembers from '@/pages/StudioMembers'
import ActiveValue from '../pages/ActiveValue'
import OnlineExperts from '../pages/technology/OnlineExperts'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/StudioUnionHome'
    },
    {
      path: '/StudioUnionHome',
      name: 'StudioUnionHome',
      component: StudioUnionHome
    },
    {
      path: '/studioUnionHome',
      name: 'StudioUnionHome',
      component: StudioUnionHome
    },
    {
      path: '/activeValue',
      name: 'activeValue',
      component: ActiveValue
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
      path: '/studioMembers',
      name: 'studioMembers',
      component: studioMembers
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
    {
      path: '/Innovate',
      name: 'Innovate',
      component: Innovate,
    },
    {
      path: '/OnlineExperts',
      name: 'OnlineExperts',
      component: OnlineExperts,
    },
    {
      path: '/TechnologyQuestions',
      name: 'TechnologyQuestions',
      component: TechnologyQuestions,
    },
    {
      path: '/TechnologyDetail',
      name: 'TechnologyDetail',
      component: TechnologyDetail,
    },
    {
      path: '/technologyHome',
      name: 'technologyHome',
      component: TechnologyHome,
    },
    {
      path: '/techAnswers',
      name: 'techAnswers',
      component: TechAnswers,
    },
    {
      path: '/TechInvitation',
      name: 'TechInvitation',
      component: TechInvitation,
    },
    {
      path: '/techAnswer',
      name: 'techAnswer',
      component: TechAnswer,
    },
    {
      path: '/techForward',
      name: 'techForward',
      component: TechForward,
    },
    {
      path: '/techFollow',
      name: 'techFollow',
      component: TechFollow,
    },
    {
      path: '/studioUnionDetail',
      name: 'StudioUnionDetail',
      component: StudioUnionDetail,
    },
    {
      path: '/VoteGraphic',
      name: 'VoteGraphic',
      component: VoteGraphic,
    },
    {
      path: '/VoteProgress',
      name: 'VoteProgress',
      component: VoteProgress,
    },
    {
      path: '/studioInfo',
      name: 'StudioInfo',
      component: StudioInfo,
    },
  ]
})
