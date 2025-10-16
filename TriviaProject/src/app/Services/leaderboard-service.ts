import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private key = 'leaderboard';
  playerData: any = {};

  setPlayerData(username: string, score: number) {
    this.playerData = { username, score };
  }

  getPlayerData() {
    return this.playerData;
  }

  saveEntry(): void {
    const currentData = this.getEntries();
    currentData.push(this.playerData);

    // sort the scores from highest to lowest
    currentData.sort((a, b) => b.score - a.score);

    localStorage.setItem(this.key, JSON.stringify(currentData));
  }

  // Get all leaderboard entries from localStorage
  getEntries(): { username: string; score: number }[] {
    const storedScores = localStorage.getItem(this.key);

    if (!storedScores) {
      return [];
    }

    const scores = JSON.parse(storedScores);
    return scores;
  }

}
