import themes from './themes';

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
}
