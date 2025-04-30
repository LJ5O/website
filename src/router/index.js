import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaseArticle from '@/views/BaseArticle.vue'
import SkillsView from '@/views/SkillsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: BaseArticle
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/project/semantic-segmentation',
      name: 'semantic_segmentation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/projects/semanticSegmentationView.vue'),
    },
    {
      path: '/project/video-editor',
      name: 'video_editor',
      component: () => import('../views/projects/videoEditorView.vue'),
    }
  ],
})

export default router
