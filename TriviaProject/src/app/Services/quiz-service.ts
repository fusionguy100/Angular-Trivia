import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'https://opentdb.com/api.php?';
  public currentQuestions: any[] = [];
  public userChoices: any[] = [];

  private numQuestions: number = 10;
  private difficulty: string = 'easy';

  public musicEnabled = true;
  public soundEnabled = true;

  constructor() {
    this.loadSettings();
  }

  backgroundMusic = new Howl({
    src: ['assets/sounds/elevator-music-jazz-lounge-419360.mp3'],
    loop: true,
    volume: 0.4
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
    if (this.musicEnabled && !this.backgroundMusic.playing()) this.backgroundMusic.play();
  }

  stopBackgroundMusic() {
    if (this.backgroundMusic.playing()) this.backgroundMusic.stop();
  }

  playClick() {
    if (this.soundEnabled) this.clickSound.play();
  }

  playButton() {
    if (this.soundEnabled) this.clickButton.play();
  }

  async fetchQuestions() {
    const url = `${this.baseUrl}amount=${this.numQuestions}&difficulty=${this.difficulty}&type=multiple`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.currentQuestions = data.results;
    } catch (error) {
      console.error(error);
      alert('Quiz failed to retrieve.');
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
    this.saveSettings();
  }

  getNumQuestions(): number {
    return this.numQuestions;
  }

  setDifficulty(dif: string): void {
    this.difficulty = dif;
    this.saveSettings();
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

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    this.saveSettings();
    if (this.musicEnabled) this.playBackgroundMusic();
    else this.stopBackgroundMusic();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.saveSettings();
  }


  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private saveSettings() {
    if (!this.isBrowser()) return;
    const settings = {
      numQuestions: this.numQuestions,
      difficulty: this.difficulty,
      musicEnabled: this.musicEnabled,
      soundEnabled: this.soundEnabled
    };
    localStorage.setItem('quizSettings', JSON.stringify(settings));
  }

  private loadSettings() {
    if (!this.isBrowser()) return;
    const saved = localStorage.getItem('quizSettings');
    if (saved) {
      try {
        const { numQuestions, difficulty, musicEnabled, soundEnabled } = JSON.parse(saved);
        this.numQuestions = numQuestions ?? 10;
        this.difficulty = difficulty ?? 'easy';
        this.musicEnabled = musicEnabled ?? true;
        this.soundEnabled = soundEnabled ?? true;
      } catch (e) {
        console.warn('Error loading settings:', e);
      }
    }
  }

  decodeHtmlEntities = (html: string): string =>
    new DOMParser().parseFromString(html, 'text/html').documentElement.textContent || '';
}
