import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizService } from './Services/quiz-service';
import { Howler } from 'howler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  private initialized = false;

  constructor(private quizService: QuizService) {}

  initAudio() {
    if (!this.initialized) {
      Howler.ctx.resume();
      this.quizService.playBackgroundMusic();
      this.initialized = true;
      console.log('Background music started');
    }
  }
}
