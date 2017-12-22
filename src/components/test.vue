<table>
        <thead>
          <tr>
              <th>ID#</th>
              <th>Name</th>
              <th>Group</th>
              <th>Section</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td v-for="student in students" v-bind:key="student.id">{{student.student_id}}</td>
            <td v-for="student in students" v-bind:key="student.id">{{student.name}}</td>
            <td v-for="student in students" v-bind:key="student.id">{{student.group}}</td>
            <td v-for="student in students" v-bind:key="student.id">{{student.section}}</td>
            <td>
              <router-link class="secondary-content" v-bind:to="{name:'view-student', params: {student_id: student.student_id}}">
                <i class="fa fa-eye"></i>
              </router-link>
            </td>
          </tr>

        </tbody>
      </table>



      <template>
       <div id="dashboard">
         <ul class="collection with-header">
           <li class="collection-header">
             <h4>Students</h4>
           </li>
           <li v-for="student in students" v-bind:key="student.id" class="collection-item">
           {{student.student_id}} : {{student.name}} {{student.group}} {{student.section}}

           <router-link class="secondary-content" v-bind:to="{name:'view-student', params: {student_id: student.student_id}}">
             <i class="fa fa-eye"></i>
           </router-link>
           </li>
         </ul>
         <div class="fixed-action-btn">
           <router-link to="/new" class="btn-floating btn-large red">
             <i class="fa fa-plus"></i>
           </router-link>
         </div>
       </div>
      </template>
