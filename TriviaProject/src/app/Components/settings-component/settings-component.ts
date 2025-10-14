import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../Services/quiz-service';

@Component({
  selector: 'app-settings-component',
  imports: [],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css'
})

export class SettingsComponent {

  constructor(private router: Router, private quizService: QuizService) {}

  numQuestions: number | null = null;
  difficulty: string = '';

toHome() {
 this.router.navigate([''])
}

toLeaderboard() {
 this.router.navigate(['/leaderboard'])
}

confirmQuestions() {
  if(this.numQuestions && this.numQuestions > 0) {
    this.quizService.setNumQuestions(this.numQuestions)
    alert(`Number of questions set to ${this.numQuestions}`)
  } else {
    alert('Please enter a valid number of questions.')
  }
}


confirmDifficulty(){
 if(this.difficulty) {
  this.quizService.setDifficulty(this.difficulty.toLowerCase());
  alert(`Difficulty set to ${this.difficulty}`)
 } else {
  alert('Please enter a difficulty (easy, medium, or hard). ')
 }
}

}
