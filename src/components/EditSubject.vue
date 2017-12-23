<template>
 <div id="edit-subject">
   <h3>Edit Subject</h3>
   <div class="row">
     <form @submit.prevent="updateSubject" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="subject_id" required />

          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />

          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="room" required />

          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/subjects" class="btn grey">Cancel</router-link>
     </form>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'edit-subject',
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
    updateSubject () {
      db.collection('subjects').where('subject_id', '==', this.$route.params.subject_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({
            subject_id: this.subject_id,
            name: this.name,
            room: this.room
          })
          .then(() => {
            this.$router.push({name: 'view-subject', params: {subject_id: this.subject_id}})
          })
        })
      })
    }
  }
}
</script>
