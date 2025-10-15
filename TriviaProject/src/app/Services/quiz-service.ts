import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'https://opentdb.com/api.php?';
  public currentQuestions: any[] = [];

  private numQuestions: number = 10; //default value
  private difficulty: string = "easy"; //default value

  //audio settings
  public musicEnabled = false;
  public soundEnabled = false;



  async getQuestions() {
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

  toggleMusic() {
    //skeleton
  }
  toggleSound(){
    //skeleton
  }

  // format the quiz text
  decodeHtmlEntities = (html: string): string =>
    new DOMParser().parseFromString(html, 'text/html').documentElement.textContent || '';

}
