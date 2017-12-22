<template>
 <div id="new-teacher">
   <h3>New Teacher</h3>
   <div class="row">
     <form @submit.prevent="saveTeacher" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="teacher_id" required />
            <label>Teacher ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label>Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="subject" required />
            <label>Subject</label>
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
  name: 'new-teacher',
  data () {
    return {
      teacher_id: null,
      name: null,
      subject: null
    }
  },
  methods: {
    saveTeacher () {
      db.collection('teachers').add({
        teacher_id: this.teacher_id,
        name: this.name,
        subject: this.subject
      })
      .then(docRef => this.$router.push('/teachers'))
      .catch(error => console.log(err))
    }
  }
}
</script>
