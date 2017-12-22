<template>
  <nav>
    <div class="nav-wrapper deep-purple lighten-1">
      <div class="container">
        <router-link to="/" class="brand-logo">Schedule Manager</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link to="/students">Students</router-link>
          <router-link to="/teachers">Teachers</router-link>
          <router-link to="/subjects">Subjects</router-link>
          <router-link to="/">Timetable</router-link>
      </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

#nav-mobile {
    display: flex;
    align-items: center;
    font-weight: 500;
  }

</style>
