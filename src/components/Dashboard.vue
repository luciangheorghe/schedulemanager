<template>
 <div id="dashboard">
   <div class="container">
     <h3 class="center-align">Timetable</h3>
   </div>
   <table class="bordered highlight">
     <thead>
       <tr>
            <th></th>
           <th class="center-align">{{days[1].name}}</th>
           <th class="center-align">{{days[2].name}}</th>
           <th class="center-align">{{days[3].name}}</th>
           <th class="center-align">{{days[4].name}}</th>
           <th class="center-align">{{days[5].name}}</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>{{hours[0].hours}}</td>
         <td class="center-align">{{subjects[5].name}} <br />
         {{teachers[5].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[0].name}} <br />
         {{teachers[0].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[3].name}} <br />
         {{teachers[3].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[2].name}} <br />
         {{teachers[2].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[6].name}} <br />
         {{teachers[6].name}} <br /><router-link to="/students">View Attendees</router-link></td>
       </tr>
       <tr>
         <td>{{hours[1].hours}}</td>
         <td class="center-align">{{subjects[5].name}} <br />
         {{teachers[5].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[1].name}} <br />
         {{teachers[1].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[1].name}} <br />
         {{teachers[1].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[3].name}} <br />
         {{teachers[3].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[4].name}} <br />
         {{teachers[4].name}} <br /><router-link to="/students">View Attendees</router-link></td>
       </tr>
       <tr>
         <td>{{hours[2].hours}}</td>
         <td class="center-align">{{subjects[2].name}} <br />
         {{teachers[2].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[0].name}} <br />
         {{teachers[0].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[4].name}} <br />
         {{teachers[4].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td></td>
         <td class="center-align">{{subjects[4].name}} <br />
         {{teachers[4].name}} <br /><router-link to="/students">View Attendees</router-link></td>
       </tr>
       <tr>
         <td>{{hours[3].hours}}</td>
         <td></td>
         <td></td>
         <td></td>
         <td class="center-align">{{subjects[0].name}} <br />
         {{teachers[0].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td></td>
       </tr>
       <tr>
         <td>{{hours[4].hours}}</td>
         <td></td>
         <td class="center-align">{{subjects[7].name}} <br />
         {{teachers[7].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td class="center-align">{{subjects[6].name}} <br />
         {{teachers[6].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td></td>
         <td></td>
       </tr>
       <tr>
         <td>{{hours[5].hours}}</td>
         <td></td>
         <td class="center-align">{{subjects[7].name}} <br />
         {{teachers[7].name}} <br /><router-link to="/students">View Attendees</router-link></td>
         <td></td>
         <td class="center-align">{{subjects[0].name}} <br />
         {{teachers[0].name}} <br /><router-link to="/students">View Attendees</router-link></td>
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
      subjects: [],
      days: [],
      hours: []
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
    db.collection('teachers').orderBy('teacher_id').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'teacher_id': doc.data().teacher_id,
          'name': doc.data().name,
          'subject': doc.data().subject,
          'days': doc.data().days,
          'hours': doc.data().hours
        }
        this.teachers.push(data)
      })
    }),
    db.collection('subjects').orderBy('subject_id').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'subject_id': doc.data().subject_id,
          'name': doc.data().name,
          'room': doc.data().room
        }
        this.subjects.push(data)
      })
    }),
    db.collection('days').orderBy('day_id').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'day_id': doc.data().day_id,
          'name': doc.data().name
        }
        this.days.push(data)
      })
    }),
    db.collection('hours').orderBy('hour_id').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'hour_id': doc.data().hour_id,
          'hours': doc.data().hours,
          'interval': doc.data().interval
        }
        this.hours.push(data)
      })
    })
  }
}
</script>
