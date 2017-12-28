<template>
 <div id="new-subject">
   <h3>New Subject</h3>
   <div class="row">
     <form @submit.prevent="saveSubject" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="subject_id" required />
            <label>Subject ID#</label>
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
            <input type="text" v-model="room" required />
            <label>Room</label>
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
  name: 'new-subject',
  data () {
    return {
      subject_id: null,
      name: null,
      room: null
    }
  },
  methods: {
    saveSubject () {
      db.collection('subjects').add({
        subject_id: this.subject_id,
        name: this.name,
        room: this.room
      })
      .then(docRef => this.$router.push('/subjects'))
      .catch(error => console.log(err))
    }
  }
}
</script>
