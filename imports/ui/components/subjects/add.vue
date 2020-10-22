<template>
  <div class="modal add__student__modal">
    <div class="section__header">
      <h1>Add Subject</h1>
    </div>
    <form @submit.prevent="addSubject">
      <div class="form__group">
        <label for="subject-name" class="form__label">Subject Name:</label>
        <div class="form__control">
          <input id="subject-name" type="text" v-model="subject.name" placeholder="Ex: Bengali, English etc." required>
        </div>
      </div>

      <div class="student__added__list">
        <label class="form__label">Already Added:</label>
        <span v-for="(student, index) in getStudents()" :key="student._id">
          {{student.name}}{{ getStudents().length - 1 > index ? ", " : ""  }}
        </span>
      </div>

      <!-- Students List For Adding To A Subject -->
      <div class="enrolling__students">
        <div
          class="enrolling__student"
          v-for="student in students"
          :key="student._id"
          @click="addStudentToSubject(student._id)"
        >{{ student.name }}</div>
      </div>

      <div class="form__action__btns">
        <button @click="cancelSubjectCreation" class="btn__orange">Cancel</button>
        <button type="submit" class="btn__green">Add Subject</button>
      </div>
    </form>
  </div>
</template>

<script>
// Importing Collections
import { Students } from "../../../api/collections/students";
import { Subjects } from "../../../api/collections/subjects";

export default {
  data() {
    return {
      subject: {
        name: '',
        students: []
      }
    }
  },  
  meteor: {
    students() {
      return Students.find({}).fetch();
    },
    subjects() {
      return Subjects.find({}).fetch();
    }
  },
  methods: {
    getStudents() {
      let students = [];
      this.subject.students.map(stuID => {
        students.push(this.students.find(stu => stu._id === stuID));
      });
      return students;
    },
    addSubject() {
      this.$store.dispatch('CHANGE_ADD_SUBJECT_MODAL');
      if(this.subject.students.length < 1) {
          alert("Please add students to this subject to create the subject!!!");
      } else {
          Subjects.insert(this.subject);
          // Clearing Form
          this.subject.name = "";
          this.subject.students = [];
      }
    },
    addStudentToSubject(studentId){
        const studentExists = this.subject.students.find(stuId => stuId === studentId);
        if(studentExists){
            alert("Student already enrolled!!!");
        } else {
            alert("Added Student To This Subject!!!");
            this.subject.students.push(studentId);
        }
    },
    cancelSubjectCreation() {
      this.$store.dispatch('CHANGE_ADD_SUBJECT_MODAL');
      // Clearing Form
      this.subject.name = "";
      this.subject.students = [];
    }
  }
}
</script>

<style>

</style>