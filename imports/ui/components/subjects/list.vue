<template>
  <div class="subjects__list__section">
    <div class="section__header">
      <h1>Subjects List</h1>
      <!-- Subject Add Modal Shower -->
      <button @click="$store.dispatch('CHANGE_ADD_SUBJECT_MODAL')" class="btn__green">Add Subject</button>
    </div>
    <table class="subjects-list-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Students</th>
          <th colspan="2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="subject in subjects" :key="subject._id">
          <td>{{subject.name}}</td>
          <td>
            <span v-for="(student, index) in getStudentsForSubject(subject._id)" :key="student._id">
              {{student.name}}{{ getStudentsForSubject(subject._id).length - 1 > index ? ", " : ""  }}
            </span>
          </td>
          <td><button @click="updateSubject(subject)" class="btn__blue">Update</button></td>
          <td><button @click="removeSubject(subject._id)" class="btn__red">Remove</button></td>
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
    getStudentsForSubject(subjectId) {
      let studentsForSubject = [];
      let subject = this.subjects.find(sub => sub._id === subjectId);
      subject.students.map(stuID => {
        studentsForSubject.push(this.students.find(stu => stu._id === stuID));
      });
      return studentsForSubject;
    },
    removeSubject(subjectId){
      if(confirm("Are you sure to delete it??")) {
        Subjects.remove(subjectId);
      }
    },
    updateSubject(subject) {
      this.$store.dispatch("CHANGE_UPDATE_SUBJECT_MODAL");
      this.$store.dispatch("CHANGE_UPDATING_SUBJECT_VALUE", subject);
    }
  },
}
</script>

<style>

</style>