<template>
  <div class="container">
    <div
      class="main__content"
      :class="{blur : addStudentModal || updateStudentModal || addSubjectModal || updateSubjectModal}"
      >
      <!-- Students List With Their Subjects -->
      <StudentList />
      <!-- Subjects List With Students -->
      <SubjectList />
    </div>
    <!-- Student Create Modal -->
    <AddStudent v-if="addStudentModal" />
    <!-- Student Update Modal -->
    <UpdateStudent v-if="updateStudentModal" />
    <!-- Subject Create Modal -->
    <AddSubject v-if="addSubjectModal" />
    <!-- Subject Update Modal -->
    <UpdateSubject v-if="updateSubjectModal" />
  </div>
</template>

<script>
// Importing Components
import AddStudent from "./components/students/add.vue";
import UpdateStudent from "./components/students/update.vue";
import StudentList from "./components/students/list.vue";

import AddSubject from "./components/subjects/add.vue";
import UpdateSubject from "./components/subjects/update.vue";
import SubjectList from "./components/subjects/list.vue";

export default {
  name: "App",
  data() {
    return { }
  },
  computed: {
    addStudentModal() {
      return this.$store.state.addStudentModal;
    },
    updateStudentModal() {
      return this.$store.state.updateStudentModal;
    },
    addSubjectModal() {
      return this.$store.state.addSubjectModal;
    },
    updateSubjectModal() {
      return this.$store.state.updateSubjectModal;
    },
  },
  components: {
    AddStudent,
    UpdateStudent,
    StudentList,
    AddSubject,
    UpdateSubject,
    SubjectList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color: #fff;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: #002663;
}
table {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}
th, td {
  vertical-align: middle;
  text-align: center;
}
td {
  padding: 5px 0;
  border-top: 1px solid #fff;
}
.container {
  padding: 2em 0;
}
.main__content {
  margin: 0 auto;
  transition: all 1s;
  transform-origin: 0 0;
}
.blur {
  -moz-filter: blur (10px);
  -o-filter: blur (10px);
  -ms-filter: blur (10px);
  filter: blur(10px);
}
.text__center {
  text-align: center;
}
.section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
}
.modal .section__header {
  justify-content: center;
}
.section__header > h1 {
  display: inline-block;
  border-bottom: 3px solid #fff;
}
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 1rem;
  background-color: #4d4f53;
}
/* Form Styling */
.form__group {
  width: 100%;
  margin-bottom: 10px;
}
.form__label {
  margin-bottom: 5px;
}
.form__label span {
  color: red;
}
.form__control {
  width: 100%;
}
.form__control input {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
}
.form__action__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.enrolling__students {
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid violet;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
}
.enrolling__student {
  margin-right: 10px;
  padding: 10px 20px;
  background: goldenrod;
  border-radius: 5px;
  cursor: pointer;
}
/* Custom Button Styling */
.btn__green, .btn__blue, .btn__red, .btn__orange {
  background: none;
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  color: white;
}
.btn__green {
  background: mediumseagreen;
}
.btn__orange {
  background: coral;
}
.btn__blue {
  background: dodgerblue;
}
.btn__red {
  background: indianred;
}
.btn__blue, .btn__red {
  font-size: .8em;
  padding: 3px 6px;
}

@media(min-width: 1377px) {
  .main__content {
    width: 50vw;
  }
}
@media(max-width: 1376px) {
  .main__content {
    width: 65vw;
  }
}
@media(max-width: 996px) {
  .main__content {
    width: 75vw;
  }
}
@media (max-width: 476px) {
  .main__content {
    width: 85vw;
  }
}
</style>