import themes from './themes';
import { generateTeam } from './generators';
import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Vampire from './Vampire';
import Undead from './Undead';
import Magician from './Magician';
import Daemon from './Daemon';
// import GamePlay from './GamePlay';
import Team from './Team';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);
    this.setTwoDimensionalBoard();
    this.gamePlay.redrawPositions(this.setTeam([Bowman, Swordsman], [Vampire, Undead]));
    console.log(this);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }

  setTwoDimensionalBoard() {
    this.gamePlay.coords = [];
    for (let y = 0; y < this.gamePlay.boardSize; y += 1) {
      for (let x = 0; x < this.gamePlay.boardSize; x += 1) {
        const cell = {};
        cell.x = x;
        cell.y = y;
        this.gamePlay.coords.push(cell);
      }
    }
  }

  setTeam(userChars, aiChars) {
    this.gamePlay.team = new Team(generateTeam(userChars, 1, 2), generateTeam(aiChars, 1, 2));
    return this.gamePlay.team.characters;
  }
}
