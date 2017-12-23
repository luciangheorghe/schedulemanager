<template>
 <div id="subjects">
   <div class="container">
     <h3 class="center-align">Subjects</h3>
   </div>
   <table class="bordered highlight">
           <thead>
             <tr>
                 <th class="center-align">ID#</th>
                 <th>Name</th>
                 <th class="center-align">Room</th>
                 <th class="center-align">View</th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="subject in subjects" v-bind:key="subject.id">
               <td class="center-align">{{subject.subject_id}}</td>
               <td >{{subject.name}}</td>
               <td class="center-align">{{subject.room}}</td>
               <td class="center-align">
                 <router-link  v-bind:to="{name:'view-subject', params: {subject_id: subject.subject_id}}">
                   <i class="fa fa-eye"></i>
                 </router-link>
               </td>
             </tr>
           </tbody>
   </table>
   <div class="fixed-action-btn">
     <router-link to="/newsubject" class="btn-floating btn-large red waves-effect waves-light">
       <i class="fa fa-plus"></i>
     </router-link>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'subjects',
  data () {
    return {
      subjects: []
    }
  },
  created () {
    db.collection('subjects').orderBy('name').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'subject_id': doc.data().subject_id,
          'name': doc.data().name,
          'room': doc.data().room
        }
        this.subjects.push(data)
      })
    })
  }
}
</script>
