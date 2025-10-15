import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuizService } from '../../Services/quiz-service'

@Component({
  selector: 'app-quiz-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz-component.html',
  styleUrl: './quiz-component.css'
})

export class QuizComponent implements OnInit {

  questions: any[] = [];

  currentIndex = 0;
  question: string = "";
  answers: string[] = []; 
  correct_answer: string = "";
  chosen: string = "";
  userChoices: string[] = [];


  constructor(private quizService: QuizService) {}
  
  async ngOnInit() {
    this.questions = await this.quizService.getQuestions();
    
    for (let question of this.questions) {

      // format all the text
      question["question"] = this.quizService.decodeHtmlEntities(question["question"]);
      question["correct_answer"] = this.quizService.decodeHtmlEntities(question["correct_answer"]);
      question.answers = [question["correct_answer"]];

      for (let answer of question["incorrect_answers"]) {
        answer = this.quizService.decodeHtmlEntities(answer);
        question.answers.push(answer);
      }

      // randomize the choices
      question.answers.sort(() => Math.random() - 0.5);
    }

    // console.log(this.questions);
    this.userChoices = new Array(this.questions.length);
    this.currentQuestion();
  }

  currentQuestion() {
    this.correct_answer = this.questions[this.currentIndex]["correct_answer"];
    this.question = this.questions[this.currentIndex]["question"];
    this.answers = this.questions[this.currentIndex]["answers"];
    this.chosen = this.userChoices[this.currentIndex];
  }

  nextQuestion() {
    this.userChoices[this.currentIndex] = this.chosen;

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
    this.currentQuestion();
  }

  previousQuestion() {
    this.userChoices[this.currentIndex] = this.chosen;

    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.currentQuestion();
  }

  // TODO
  submitQuiz() {
    alert("quiz submitted");
  }

}
