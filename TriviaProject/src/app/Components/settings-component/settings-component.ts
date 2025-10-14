import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../Services/quiz-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-component',
  imports: [FormsModule],
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
  const amount = Number(this.numQuestions);

  if (amount > 0 && amount <= 50) {
    this.quizService.setNumQuestions(amount);
    alert(`Number of questions set to ${amount}`);
  } else {
    alert('Please enter a valid number of questions (1–50).');
  }
}

  confirmDifficulty() {
    const valid = ['easy', 'medium', 'hard'];
    const diff = this.difficulty.toLowerCase();

    if (valid.includes(diff)) {
      this.quizService.setDifficulty(diff);
      alert(`Difficulty set to ${diff}`);
    } else {
      alert('Please select: easy, medium, or hard.');
    }
  }

}
