import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home-component/home-component';
import { SettingsComponent } from './Components/settings-component/settings-component';
import { LeaderboardComponent } from './Components/leaderboard-component/leaderboard-component';
import { QuizComponent } from './Components/quiz-component/quiz-component';
import { ResultsComponent } from './Components/results-component/results-component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: ResultsComponent },
];
