<template>
  <div class="modal update__student__modal">
    <div class="section__header">
      <h1>Update Subject</h1>
    </div>
    <form @submit.prevent="updateSubject">
      <div class="form__group">
        <label for="subject-name" class="form__label">Subject Name:</label>
        <div class="form__control">
          <input id="subject-name" type="text" v-model="subject.name" placeholder="Ex: Bengali, English etc." required>
        </div>
      </div>

      <div class="student__added__list">
        <label class="form__label">Already Added:</label>
        <span v-for="(student, index) in addedStudents" :key="student._id">
          {{student.name}}{{ addedStudents.length - 1 > index ? ", " : ""  }}
        </span>
      </div>

      <!-- Students List For Adding To A Subject -->
      <div class="student__add__or__remove_input">
        <label class="form__label">Click To Add Or Remove</label>
        <div class="enrolling__students">
          <div
            class="enrolling__student"
            v-for="student in students"
            :key="student._id"
            @click="toggleStudentToSubject(student._id)"
          >{{ student.name }}</div>
        </div>
      </div>

      <div class="form__action__btns">
        <button @click="cancelSubjectUpdating" class="btn__orange">Cancel</button>
        <button type="submit" class="btn__green">Update Subject</button>
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
      _id: "",
      subject: {
        name: '',
        students: []
      },
      addedStudents: []
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
  computed: {
    updatingSubjectValue() {
      return this.$store.state.updatingSubjectValue;
    }
  },
  created() {
    this.changingData();
    this.getStudentsForSubject(this._id);
  },
  methods: {
    getStudentsForSubject(subjectId) {
      let subject = this.subjects.find(sub => sub._id === subjectId);
      subject.students.map(stuID => {
        this.addedStudents.push(this.students.find(stu => stu._id === stuID));
      });
    },
    updateSubject() {
      this.$store.dispatch('CHANGE_UPDATE_SUBJECT_MODAL');
      if(this.subject.students.length < 1) {
          alert("Please add students to this subject to create the subject!!!");
      } else {
          Subjects.update(this._id, this.subject);
          //clear form
          this._id = "";
          this.subject.name = "";
          this.subject.students = [];
      }
    },
    toggleStudentToSubject(studentId) {
      const studentExists = this.subject.students.find(stuId => stuId === studentId);
      if(studentExists) {
        alert("Removed Student From This Subject!!!");
        this.subject.students.splice(this.subject.students.indexOf(studentId), 1);        
        this.addedStudents.splice(this.addedStudents.indexOf(this.students.find(stu => stu._id === studentId)), 1);
      } else {
        alert("Added Student To This Subject!!!");
        this.subject.students.push(studentId);        
        this.addedStudents.push(this.students.find(stu => stu._id === studentId));
      }
    },
    changingData() {
      this._id = this.updatingSubjectValue._id;
      this.subject.name = this.updatingSubjectValue.name;
      this.subject.students = this.updatingSubjectValue.students;
    },
    cancelSubjectUpdating() {
      this.$store.dispatch('CHANGE_UPDATE_SUBJECT_MODAL');
      location.reload();
    }
  }
}
</script>

<style scoped>
.student__added__list {
  margin-bottom: 20px;
}
</style>