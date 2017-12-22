<template>
 <div id="teachers">
   <div class="container">
     <h3 class="center-align">Teachers</h3>
   </div>
   <table class="bordered highlight">
           <thead>
             <tr>
                 <th class="center-align">ID#</th>
                 <th>Name</th>
                 <th class="center-align">Subject</th>
                 <th class="center-align">View</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="teacher in teachers" v-bind:key="teacher.id">
               <td class="center-align">{{teacher.teacher_id}}</td>
               <td >{{teacher.name}}</td>
               <td class="center-align">{{teacher.subject}}</td>
               <td class="center-align">
                 <router-link  v-bind:to="{name:'view-teacher', params: {teacher_id: teacher.teacher_id}}">
                   <i class="fa fa-eye"></i>
                 </router-link>
               </td>
             </tr>
           </tbody>
   </table>
   <div class="fixed-action-btn">
     <router-link to="/newteacher" class="btn-floating btn-large red waves-effect waves-light">
       <i class="fa fa-plus"></i>
     </router-link>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'teachers',
  data () {
    return {
      teachers: []
    }
  },
  created () {
    db.collection('teachers').orderBy('name').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'teacher_id': doc.data().teacher_id,
          'name': doc.data().name,
          'subject': doc.data().subject
        }
        this.teachers.push(data)
      })
    })
  }
}
</script>
