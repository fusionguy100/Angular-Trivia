import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Howl, Howler } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'https://opentdb.com/api.php?';
  public currentQuestions: any[] = [];
  public userChoices: any[] = [];

  private numQuestions: number = 10; //default value
  private difficulty: string = "easy"; //default value

  //audio settings
  public musicEnabled = true;
  public soundEnabled = true;


  backgroundMusic = new Howl({
    src: ['assets/sounds/elevator-music-jazz-lounge-419360.mp3'],
    loop: true,
    volume: 0.1
  });

  clickSound = new Howl({
    src: ['assets/sounds/ui-sounds-pack-3-10-359727.mp3'],
    volume: 0.7
  });

  clickButton = new Howl({
    src: ['assets/sounds/computer-mouse-click-352734.mp3'],
    volume: 0.7
  });

  playBackgroundMusic() {
    if (this.musicEnabled && !this.backgroundMusic.playing()) {
      this.backgroundMusic.play();
    }
  }

  stopBackgroundMusic() {
    if (this.backgroundMusic.playing()) {
      this.backgroundMusic.stop();
    }
  }

  playClick() {
    if (this.soundEnabled) this.clickSound.play();
  }

  playButton() {
    if (this.soundEnabled) this.clickButton.play();
  }

  // -----------------------------------

  async fetchQuestions() {
    let url = `${this.baseUrl}amount=${this.numQuestions}&difficulty=${this.difficulty}&type=multiple`;

    try {

      const response = await fetch(url, {
        method: "GET"
      });

      const data = await response.json();
      this.currentQuestions = data.results;

    } catch (error) {
      console.error(error);
      alert("Quiz failed to retrieve.");
    }

    return this.currentQuestions;
  }

  setQuestions(currentQuestions: any[]) {
    this.currentQuestions = currentQuestions;
  }

  getQuestions() {
    return this.currentQuestions;
  }

  setNumQuestions(num: number): void {
    this.numQuestions = num;
  }

  getNumQuestions(): number {
    return this.numQuestions;
  }

  setDifficulty(dif: string): void  {
    this.difficulty = dif;
  }

  getDifficulty(): string {
  return this.difficulty;
  }

  setChoices(userChoices: any[]) {
    this.userChoices = userChoices;
  }

  getChoices(): any[] {
    return this.userChoices;
  }


  // format the quiz text
  decodeHtmlEntities = (html: string): string =>
    new DOMParser().parseFromString(html, 'text/html').documentElement.textContent || '';

}
