import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home-component/home-component';
import { LeaderboardComponent } from './Components/leaderboard-component/leaderboard-component';
import { QuizComponent } from './Components/quiz-component/quiz-component';
import { ResultsComponent } from './Components/results-component/results-component';
import { SettingsComponent } from './Components/settings-component/settings-component';
import { NgModule } from '@angular/core';
import { Router } from 'express';

export const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "settings", component: SettingsComponent},
  {path: "leaderboard", component: LeaderboardComponent},
  {path: "results", component: ResultsComponent},
  {path: "quiz", component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
