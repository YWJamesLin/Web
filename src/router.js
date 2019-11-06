import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Users from './views/Users.vue'

import Runner from './views/runner/Index.vue'
import RunnerRecords from './views/runner/Records.vue'
import RunnerRegisterRecordIndex from './views/runner/RegisterRecordIndex.vue'
import RunnerRegisterRecordDetail from './views/runner/RegisterRecordDetail.vue'
import RunnerRecordCreate from './views/runner/RegisterRecord.vue'
import Runners from './views/runners/Index.vue'
import RunnersDetail from './views/runners/Detail.vue'
import Events from './views/events/Index.vue'
import EventsDetail from './views/events/Detail.vue'
import EventsDistanceDetail from './views/events/DistanceDetail.vue'
import EventsCreate from './views/events/Create.vue'
import EventsUpdate from './views/events/Update.vue'
import DistanceCreate from './views/events/CreateDistance.vue'
import DistanceUpdate from './views/events/UpdateDistance.vue'
import RecordUpdate from './views/record/Update.vue'
import RecordReview from './views/record/Review.vue'
import RecordReviewDetail from './views/record/ReviewDetail.vue'

Vue.use (Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/runner',
      name: 'runner',
      component: Runner,
    },
    {
      path: '/runner/records',
      name: 'runner_records',
      component: RunnerRecords,
    },
    {
      path: '/runner/register_record',
      name: 'runner_register_record',
      component: RunnerRegisterRecordIndex,
    },
    {
      path: '/runner/register_record/:id',
      name: 'runner_register_record_detail',
      component: RunnerRegisterRecordDetail,
    },
    {
      path: '/runner/register_record/:id/create',
      name: 'runner_record_create',
      component: RunnerRecordCreate,
    },
    {
      path: '/runners',
      name: 'runners',
      component: Runners,
    },
    {
      path: '/runners/:id',
      name: 'runner_detail',
      component: RunnersDetail,
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
    },
    {
      path: '/events/create',
      name: 'events_create',
      component: EventsCreate,
    },
    {
      path: '/events/:id',
      name: 'events_detail',
      component: EventsDetail,
    },
    {
      path: '/events/:id/distances/create',
      name: 'distance_create',
      component: DistanceCreate,
    },
    {
      path: '/events/:id/distances/:distanceId',
      name: 'events_distance_detail',
      component: EventsDistanceDetail,
    },
    {
      path: '/events/:id/update',
      name: 'events_update',
      component: EventsUpdate,
    },
    {
      path: '/events/:id/distances/:distanceId/update',
      name: 'distance_update',
      component: DistanceUpdate,
    },
    {
      path: '/records/:id/update',
      name: 'record_update',
      component: RecordUpdate,
    },
    {
      path: '/records/review',
      name: 'records_review',
      component: RecordReview,
    },
    {
      path: '/records/:id/review',
      name: 'records_review_detail',
      component: RecordReviewDetail,
    },
  ]
})
