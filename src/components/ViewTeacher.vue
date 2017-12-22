<template>
 <div id="view-teacher">
   <ul class="collection with-header">
     <li class="collection-header">
       <h4>{{name}}</h4>
     </li>
     <li class="collection-item">Teacher ID#: {{teacher_id}}</li>
     <li class="collection-item">Subject: {{subject}}</li>
   </ul>
   <router-link to="/teachers" class="btn grey">Back</router-link>
   <button @click="deleteTeacher" class="btn red">Delete</button>

   <div class="fixed-action-btn">
     <router-link v-bind:to="{name: 'edit-teacher', params: {teacher_id: teacher_id}}" class="btn-floating btn-large red">
       <i class="fa fa-pencil"></i>
     </router-link>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-teacher',
  data () {
    return {
      teacher_id: null,
      name: null,
      subject: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('teachers').where('teacher_id', '==', to.params.teacher_id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.teacher_id = doc.data().teacher_id
          vm.name = doc.data().name
          vm.subject = doc.data().subject
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('teachers').where('teacher_id', '==', this.$route.params.teacher_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.teacher_id = doc.data().teacher_id
          this.name = doc.data().name
          this.subject = doc.data().subject
        })
      })
    },
    deleteTeacher () {
      if(confirm('Are you sure?')) {
        db.collection('teachers').where('teacher_id', '==', this.$route.params.teacher_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
            this.$router.push('/teachers')
          })
        })
      }
    }
  }
}
</script>
