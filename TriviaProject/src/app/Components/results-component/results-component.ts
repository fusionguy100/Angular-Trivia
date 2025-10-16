import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { QuizService } from '../../Services/quiz-service';
import { LeaderboardService } from '../../Services/leaderboard-service';

@Component({
  selector: 'app-results-component',
  imports: [FormsModule],
  templateUrl: './results-component.html',
  styleUrl: './results-component.css'
})
export class ResultsComponent implements OnInit {
  userChoices: any[] = [];
  questions: any[] = [];

  correct: number = 0;
  score: number = 0;
  username: string = "";

  constructor(private router: Router, private quizService: QuizService, private leaderboardService: LeaderboardService) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    this.userChoices = this.quizService.getChoices();
    this.calculateScore();
  }

  calculateScore() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i]["correct_answer"] === this.userChoices[i]) {
        this.correct += 1;
      }
    }

    this.score = this.correct / this.questions.length * 100;
  }

  toLeaderboard() {
    this.leaderboardService.setPlayerData(this.username, this.score);
    this.leaderboardService.saveEntry();
    this.router.navigate(['/leaderboard'])
  }

}
