<template>
 <div id="students">
   <div class="container">
     <h3 class="center-align">Students</h3>
   </div>
   <table class="bordered highlight">
           <thead>
             <tr>
                 <th class="center-align">ID#</th>
                 <th>Name</th>
                 <th class="center-align">Group</th>
                 <th>Section</th>
                 <th class="center-align">View</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="student in students" v-bind:key="student.id">
               <td class="center-align">{{student.student_id}}</td>
               <td >{{student.name}}</td>
               <td class="center-align">{{student.group}}</td>
               <td >{{student.section}}</td>
               <td class="center-align">
                 <router-link  v-bind:to="{name:'view-student', params: {student_id: student.student_id}}">
                   <i class="fa fa-eye"></i>
                 </router-link>
               </td>
             </tr>
           </tbody>
   </table>
   <div class="fixed-action-btn">
     <router-link to="/new" class="btn-floating btn-large red waves-effect waves-light">
       <i class="fa fa-plus"></i>
     </router-link>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'students',
  data () {
    return {
      students: []
    }
  },
  created () {
    db.collection('students').orderBy('name').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'student_id': doc.data().student_id,
          'name': doc.data().name,
          'group': doc.data().group,
          'section': doc.data().section
        }
        this.students.push(data)
      })
    })
  }
}
</script>
