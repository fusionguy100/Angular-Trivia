import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-leaderboard-component',
  imports: [],
  templateUrl: './leaderboard-component.html',
  styleUrl: './leaderboard-component.css'
})
export class LeaderboardComponent {

  constructor(private router: Router) {}

toHome() {
 this.router.navigate([''])
}



}
