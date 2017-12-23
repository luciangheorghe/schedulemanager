import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewStudent from '@/components/NewStudent'
import ViewStudent from '@/components/ViewStudent'
import EditStudent from '@/components/EditStudent'
import Students from '@/components/Students'
import Teachers from '@/components/Teachers'
import NewTeacher from '@/components/NewTeacher'
import EditTeacher from '@/components/EditTeacher'
import ViewTeacher from '@/components/ViewTeacher'
import Subjects from '@/components/Subjects'
import NewSubject from '@/components/NewSubject'
import EditSubject from '@/components/EditSubject'
import ViewSubject from '@/components/ViewSubject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-student',
      component: NewStudent
    },
    {
      path: '/newteacher',
      name: 'new-teacher',
      component: NewTeacher
    },
    {
      path: '/newsubject',
      name: 'new-subject',
      component: NewSubject
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: Subjects
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers
    },
    {
      path: '/edit/:student_id',
      name: 'edit-student',
      component: EditStudent
    },
    {
      path: '/edit/:teacher_id',
      name: 'edit-teacher',
      component: EditTeacher
    },
    {
      path: '/edit/:subject_id',
      name: 'edit-subject',
      component: EditSubject
    },
    {
      path: '/:teacher_id',
      name: 'view-teacher',
      component: ViewTeacher
    },
    {
      path: '/:subject_id',
      name: 'view-subject',
      component: ViewSubject
    },
    {
      path: '/:student_id',
      name: 'view-student',
      component: ViewStudent
    }
  ]
})
