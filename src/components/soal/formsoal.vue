<script setup>
import Button from '../button.vue';
</script>

<template>
  <Button buttonType="danger" to="/">Kembali</Button>
  <div class="quiz">
    <div v-for="(questionItem, questionIndex) in questions" :key="questionIndex">
      <h2>{{ questionItem.question }}</h2>
      <ul>
        <li v-for="(option, optionIndex) in questionItem.options" :key="optionIndex">
          <label>
            <input 
              type="radio" 
              :name="'question' + questionIndex" 
              :value="option" 
              v-model="userAnswers[questionIndex]" 
            />
            {{ option }}
          </label>
        </li>
      </ul>
    </div>
    <Button class="button" @click="checkAnswers">Submit</Button>
    <p v-if="result !== null">{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Apa ibukota Indonesia?",
          options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
          correctAnswer: "Jakarta"
        },
        {
          question: "Apa ibukota Jepang?",
          options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
          correctAnswer: "Tokyo"
        }
      ],
      userAnswers: Array(2).fill(null), // Menyimpan jawaban pengguna, disesuaikan dengan jumlah soal
      result: null
    };
  },
  methods: {
    checkAnswers() {
      let correctCount = 0;
      this.questions.forEach((question, index) => {
        if (this.userAnswers[index] === question.correctAnswer) {
          correctCount++;
        }
      });
      this.result = `Kamu menjawab ${correctCount} dari ${this.questions.length} soal dengan benar.`;
    }
  }
};
</script>

<style scoped>
.quiz {
  margin: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
Button {
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button.success {
  background-color: #28a745;
  color: white;
}
.button.success:hover {
  background-color: #218838;
}
</style>
