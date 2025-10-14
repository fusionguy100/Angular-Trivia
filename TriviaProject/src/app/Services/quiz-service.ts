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

  getQuestions(amount:number,  difficulty: string): Observable<any> {
     let url = `${this.baseUrl}amount=${amount}&difficulty=${difficulty}&type=multiple`;
      return this.http.get(url)
  }

}
