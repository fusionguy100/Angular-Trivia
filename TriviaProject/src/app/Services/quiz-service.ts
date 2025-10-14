import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'https://opentdb.com/api.php?'
  public currentQuestions: any[] = [];

  constructor (private http: HttpClient) {};
  private numQuestions: number = 10; //default value
  private difficulty: string = "easy" //default value

  getQuestions(amount:number,  difficulty?: string): Observable<any> {
     let url = `${this.baseUrl}amount=${amount}&difficulty=${difficulty}&type=multiple`;
      return this.http.get(url)
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

}
