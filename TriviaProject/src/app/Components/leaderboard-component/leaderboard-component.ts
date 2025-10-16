import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeaderboardService } from '../../Services/leaderboard-service';
import { QuizService } from '../../Services/quiz-service';

@Component({
  selector: 'app-leaderboard-component',
  imports: [CommonModule],
  templateUrl: './leaderboard-component.html',
  styleUrl: './leaderboard-component.css'
})
export class LeaderboardComponent implements OnInit {
  entries: any[] = [];

  constructor(private router: Router, private leaderboardService: LeaderboardService, public quizService: QuizService) {}

  ngOnInit() {
    this.entries = this.leaderboardService.getEntries();
  }

  toHome() {
    this.router.navigate([''])
  }

}
