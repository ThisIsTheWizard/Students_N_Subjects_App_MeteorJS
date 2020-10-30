<template>
  <div class="students__list__section">
    <div class="section__header">
      <h1>Students List</h1>
      <!-- Student Add Modal Shower -->
      <button @click="$store.dispatch('CHANGE_ADD_STUDENT_MODAL')" class="btn__green">Add Student</button>
    </div>

    <!-- Student List -->
    <table class="students__list__table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Date of Birth</th>
          <th>Subjects</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student._id">
          <td>{{student.name}}</td>
          <td>{{student.email}}</td>
          <td>{{student.phone}}</td>
          <td>{{student.dob}}</td>
          <td>
            <span v-for="(sub, index) in getSubjectsForStudent(student._id)" :key="sub._id">
              {{sub.name}}{{ getSubjectsForStudent(student._id).length - 1 > index ? ", " : ""  }}
            </span>
          </td>
          <td><button @click="updateStudent(student)" class="btn__blue">Update</button></td>
          <td><button @click="removeStudent(student._id)" class="btn__red">Remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// Importing Collections
import { Students } from "../../../api/collections/students";
import { Subjects } from "../../../api/collections/subjects";

export default {
   meteor: {
    students() {
      return Students.find({}).fetch();
    },
    subjects() {
      return Subjects.find({}).fetch();
    }
  },
  methods: {
    getSubjectsForStudent(studentId){
      const subjects = [];
      this.subjects.map(sub => {
        if (sub.students.includes(studentId)) {
          subjects.push(sub);
        }
      });
      return subjects;
    },
    removeStudent(studentId) {
      let studentHavingSubjects = "";
      this.subjects.map(subject => {
        studentHavingSubjects = subject.students.find(student => student === studentId);
      });
      if(studentHavingSubjects) {
        alert("You can not remove this student because he/she has subject(s)!!!");
      } else {
        if(confirm("Are you sure to delete it??")) {
          Students.remove(studentId);
        }
      }
    },
    updateStudent(student) {
      this.$store.dispatch("CHANGE_UPDATE_STUDENT_MODAL");
      this.$store.dispatch("CHANGE_UPDATING_STUDENT_VALUE", student);
    }
  }
}
</script>

<style scoped>
.students__list__section {
  margin-bottom: 4em;
}
</style>
