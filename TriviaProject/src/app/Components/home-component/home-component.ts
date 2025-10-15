import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../Services/quiz-service';
@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

    constructor(private router: Router, public quizService : QuizService) {}


  toSettings() {
  //  console.log("Heading to settings page")
    this.router.navigate(['/settings'])
  }

  toLeaderboard() {
    this.router.navigate(['/leaderboard'])
  }

  toQuiz() {
    this.router.navigate(['/quiz']);
  }

}
