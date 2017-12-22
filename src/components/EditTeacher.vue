<template>
 <div id="edit-teacher">
   <h3>Edit Teacher</h3>
   <div class="row">
     <form @submit.prevent="updateTeacher" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="teacher_id" required />

          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />

          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="subject" required />

          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/teachers" class="btn grey">Cancel</router-link>
     </form>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'edit-teacher',
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
    updateTeacher () {
      db.collection('teachers').where('teacher_id', '==', this.$route.params.teacher_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({
            teacher_id: this.teacher_id,
            name: this.name,
            subject: this.subject
          })
          .then(() => {
            this.$router.push({name: 'view-teacher', params: {teacher_id: this.teacher_id}})
          })
        })
      })
    }
  }
}
</script>
