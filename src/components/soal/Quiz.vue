<template>
    <div class="quiz-container">
      <h2 class="quiz-title">Quiz CBT</h2>
  
      <div class="quiz-content">
        <!-- Soal Quiz -->
        <div class="quiz-question-container">
          <div class="question-number-display">
            Soal {{ currentQuestion + 1 }} dari {{ questions.length }}
          </div>
  
          <div v-if="currentQuestion !== null" class="quiz-question">
            <h3>{{ questions[currentQuestion].text }}</h3>
            <div class="options-container">
              <div
                v-for="(option, optIndex) in questions[currentQuestion].options"
                :key="optIndex"
                class="option"
              >
                <label>
                  <input
                    type="radio"
                    :name="'question' + currentQuestion"
                    :value="option"
                    v-model="answers[currentQuestion]"
                    required
                  />
                  {{ option }}
                </label>
              </div>
            </div>
          </div>
  
          <!-- Navigasi Soal -->
          <div class="navigation-buttons">
            <button @click="prevQuestion" :disabled="currentQuestion === 0">Back</button>
            <button @click="nextQuestion" :disabled="currentQuestion === questions.length - 1">Next</button>
          </div>
        </div>
  
        <!-- Tabel Status Jawaban -->
        <div class="status-table-container">
          <h3>Status Jawaban</h3>
          <table class="status-table">
            <thead>
              <tr>
                <th>No</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(answer, index) in answers" :key="index">
                <td :class="answer !== null ? 'answered' : 'not-answered'">
                  {{ index + 1 }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="status-description">
            <p>
              <span class="status-box answered-box"></span> Sudah terisi
            </p>
            <p>
              <span class="status-box not-answered-box"></span> Belum terisi
            </p>
          </div>
        </div>
      </div>
  
      <!-- Submit -->
      <button type="submit" class="submit-button" @click="submitQuiz">Submit Quiz</button>
  
      <!-- Hasil Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2 class="modal-title">Hasil Quiz</h2>
          <div class="modal-results">
            <h3>Jumlah Benar: {{ correctCount }}</h3>
            <h3>Jumlah Salah: {{ questions.length - correctCount }}</h3>
            <h3>Nilai: {{ score.toFixed(2) }}%</h3>
            <h3 class="result-message">{{ score >= 60 ? "Congratulations!" : "Coba Lagi!" }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            text: "Apa ibu kota Indonesia?",
            options: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
            correctAnswer: "Jakarta",
          },
          {
            text: "Berapa hasil dari 5 + 7?",
            options: ["10", "11", "12", "13"],
            correctAnswer: "12",
          },
          {
            text: "Siapa penemu teori relativitas?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            correctAnswer: "Albert Einstein",
          },
          {
            text: "Apa bahasa resmi Indonesia?",
            options: ["Bahasa Inggris", "Bahasa Prancis", "Bahasa Indonesia", "Bahasa Mandarin"],
            correctAnswer: "Bahasa Indonesia",
          },
          {
            text: "Siapa presiden pertama Indonesia?",
            options: ["Soeharto", "Jokowi", "B.J. Habibie", "Soekarno"],
            correctAnswer: "Soekarno",
          },
          {
            text: "Apa yang menyebabkan hujan?",
            options: ["Penguapan", "Pengembunan", "Presipitasi", "Sublimasi"],
            correctAnswer: "Presipitasi",
          },
          {
            text: "Siapa penulis novel 'Laskar Pelangi'?",
            options: ["Andrea Hirata", "Tere Liye", "Habiburrahman El Shirazy", "Dewi Lestari"],
            correctAnswer: "Andrea Hirata",
          },
          {
            text: "Apa mata uang Indonesia?",
            options: ["Dolar", "Rupiah", "Yen", "Euro"],
            correctAnswer: "Rupiah",
          },
        ],
        answers: Array(8).fill(null), // Sesuaikan dengan jumlah soal
        showModal: false,
        currentQuestion: 0, // Inisialisasi pertanyaan pertama
        correctCount: 0, // Menyimpan jumlah jawaban benar
        score: 0, // Menyimpan nilai
      };
    },
    methods: {
      submitQuiz() {
        this.correctCount = this.answers.filter((answer, index) => answer === this.questions[index].correctAnswer).length;
        this.score = (this.correctCount / this.questions.length) * 100; // Menghitung nilai
        this.showModal = true; // Menampilkan modal
      },
      nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
          this.currentQuestion++;
        }
      },
      prevQuestion() {
        if (this.currentQuestion > 0) {
          this.currentQuestion--;
        }
      },
      closeModal() {
        this.showModal = false; // Menutup modal
      },
    },
  };
  </script>
  
  <style scoped>
  .quiz-container {
    max-width: 900px; /* Lebar kontainer */
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
  }
  
  .quiz-title {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .quiz-content {
    display: flex;
    justify-content: space-between;
  }
  
  .quiz-question-container {
    flex: 2;
  }
  
  .question-number-display {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .quiz-question {
    margin-bottom: 20px;
  }
  
  .options-container {
    margin-top: 10px;
  }
  
  .option {
    margin-bottom: 10px;
  }
  
  .navigation-buttons {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  
  button {
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  
  .status-table-container {
    flex: 1;
    margin-left: 20px; /* Spasi antara soal dan tabel */
  }
  
  .status-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .status-table th,
  .status-table td {
    border: 1px solid #ddd;
    padding: 0; /* Mengurangi padding untuk membuat lebih kecil */
    text-align: center;
    font-size: 14px; /* Ukuran font lebih kecil */
  }
  
  .status-table td {
    width: 25px; /* Lebar kolom menjadi lebih kecil */
    height: 25px; /* Tinggi kolom menjadi lebih kecil */
  }
  
  .answered {
    background-color: green; /* Warna hijau untuk nomor yang sudah diisi */
    color: white; /* Teks menjadi putih untuk kontras */
  }
  
  .not-answered {
    background-color: grey; /* Warna abu-abu untuk nomor yang belum diisi */
    color: white; /* Teks menjadi putih untuk kontras */
  }
  
  .status-description {
    margin-top: 10px;
  }
  
  .status-box {
    display: inline-block;
    width: 10px; /* Lebar kotak */
    height: 10px; /* Tinggi kotak */
    margin-right: 5px; /* Spasi antara kotak dan teks */
  }
  
  .answered-box {
    background-color: green; /* Kotak hijau */
  }
  
  .not-answered-box {
    background-color: grey; /* Kotak abu-abu */
  }
  
  /* Modal Styles */
  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 300px; /* Lebar modal lebih kecil */
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  
  .modal-title {
    text-align: center;
    margin-bottom: 15px;
    color: #333;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .modal-results {
    margin: 20px 0;
    text-align: center;
  }
  
  .result-message {
    font-weight: bold;
    margin-top: 10px; /* Spasi atas untuk pesan hasil */
  }
  </style>
  