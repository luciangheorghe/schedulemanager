<template>
 <div id="dashboard">
   <div class="container">
     <h3 class="center-align">Timetable</h3>
   </div>
   <table class="bordered highlight">
           <thead>
             <tr>
                  <th></th>
                 <th>Monday</th>
                 <th>Tuesday</th>
                 <th>Wednesday</th>
                 <th>Thursday</th>
                 <th>Friday</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>08 - 10</td>
               <td>  </td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>10 - 12</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>12 - 14</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>14 - 16</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>16 - 18</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
             </tr>
             <tr>
               <td>18 - 20</td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
             </tr>
           </tbody>
   </table>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'dashboard',
  data () {
    return {
      students: [],
      teachers: [],
      subjects: []
      // hours: []
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
    }),
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
    }),
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
    // db.collection('hours').orderBy('hour_id').get().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     const data = {
    //       'id': doc.id,
    //       'hour_id': doc.data().hour_id,
    //       'interval': doc.data().interval
    //     }
    //     this.hours.push(data)
    //   })
    // })
  }
}
</script>
