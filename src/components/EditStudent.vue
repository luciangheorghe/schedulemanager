<template>
 <div id="edit-student">
   <h3>Edit Student</h3>
   <div class="row">
     <form @submit.prevent="updateStudent" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="student_id" required />

          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />

          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="group" required />

          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="section" required />

          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/students" class="btn grey">Cancel</router-link>
     </form>
   </div>
 </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'edit-student',
  data () {
    return {
      student_id: null,
      name: null,
      group: null,
      section: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('students').where('student_id', '==', to.params.student_id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.student_id = doc.data().student_id
          vm.name = doc.data().name
          vm.group = doc.data().group
          vm.section = doc.data().section
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('students').where('student_id', '==', this.$route.params.student_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.student_id = doc.data().student_id
          this.name = doc.data().name
          this.group = doc.data().group
          this.section = doc.data().section
        })
      })
    },
    updateStudent () {
      db.collection('students').where('student_id', '==', this.$route.params.student_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({
            student_id: this.student_id,
            name: this.name,
            group: this.group,
            section: this.section
          })
          .then(() => {
            this.$router.push({name: 'view-student', params: {student_id: this.student_id}})
          })
        })
      })
    }
  }
}
</script>
