<template>
  <div class="modal add__student__modal">
    <div class="section__header">
      <h1>Add Student</h1>
    </div>
    <form @submit.prevent="addStudent">
      <div class="form__group">
        <label for="student-name" class="form__label">Student's Name: <span><sup>*</sup></span> </label>
        <div class="form__control">
          <input id="student-name" type="text" v-model="student.name" placeholder="Ex: John Snow" required>
        </div>
      </div>

      <div class="form__group">
        <label for="student-email" class="form__label">Student's Email: <span><sup>*</sup></span></label>
        <div class="form__control">
          <input id="student-email" type="email" v-model="student.email" placeholder="Ex: johnsnow@school.com" required>
        </div>
      </div>

      <div class="form__group">
        <label for="student-phone" class="form__label">Student's Phone: <span><sup>*</sup></span></label>
        <div class="form__control">
          <input id="student-phone" type="text" v-model="student.phone" placeholder="Ex: 812371231" required>
        </div>
      </div>

      <div class="form__group">
        <label for="student-dob" class="form__label">Date of Birth: <span><sup>*</sup></span></label>
        <div class="form__control">
          <input id="student-dob" type="date" v-model="student.dob" required>
        </div>
      </div>

      <div class="form__action__btns">
        <button @click="cancelStudentCreation" class="btn__orange">Cancel</button>
        <button type="submit" class="btn__green">Add Student</button>
      </div>
    </form>
  </div>
</template>

<script>
// Importing Collections
import { Students } from "../../../api/collections/students";

export default {
  data() {
    return {
      student: {
        name: '',
        email: '',
        phone: '',
        dob: ''
      }
    }
  },
  methods: {
    addStudent() {
      this.$store.dispatch('CHANGE_ADD_STUDENT_MODAL');
      if(this.student.name.length && this.student.email.length && this.student.phone.length && this.student.dob.length) {
        Students.insert(this.student);
        // Clearing Form
        this.student.name = "";
        this.student.email = "";
        this.student.phone = "";
        this.student.dob = "";
      } else {
        alert("Please fill all the fields correctly!!!");
      }
    },
    cancelStudentCreation() {
      this.$store.dispatch('CHANGE_ADD_STUDENT_MODAL');
      // Clearing Form
      this.student.name = "";
      this.student.email = "";
      this.student.phone = "";
      this.student.dob = "";
    }
  }
}
</script>

<style scoped>

</style>