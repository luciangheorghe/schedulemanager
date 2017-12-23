<template>
 <div id="view-subject">
   <ul class="collection with-header">
     <li class="collection-header">
       <h4>{{name}}</h4>
     </li>
     <li class="collection-item">Subject ID#: {{subject_id}}</li>
     <li class="collection-item">Room: {{room}}</li>
   </ul>
   <router-link to="/subjects" class="btn grey">Back</router-link>
   <button @click="deleteSubject" class="btn red">Delete</button>

   <div class="fixed-action-btn">
     <router-link v-bind:to="{name: 'edit-subject', params: {subject_id: subject_id}}" class="btn-floating btn-large red">
       <i class="fa fa-pencil"></i>
     </router-link>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-subject',
  data () {
    return {
      subject_id: null,
      name: null,
      room: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('subjects').where('subject_id', '==', to.params.subject_id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.subject_id = doc.data().subject_id
          vm.name = doc.data().name
          vm.room = doc.data().room
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('subjects').where('subject_id', '==', this.$route.params.subject_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.subject_id = doc.data().subject_id
          this.name = doc.data().name
          this.room = doc.data().room
        })
      })
    },
    deleteSubject () {
      if(confirm('Are you sure?')) {
        db.collection('subjects').where('subject_id', '==', this.$route.params.subject_id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
            this.$router.push('/subjects')
          })
        })
      }
    }
  }
}
</script>
