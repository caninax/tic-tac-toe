class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.isFinished() && this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.noMoreTurns() === true;
    }

    getWinner() {
        if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            return this.field[0][0];
        }
        if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
            return this.field[0][2];
        }
        for (let i = 0; i < 3; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
                return this.field[i][0];
            }
            if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                return this.field[0][i];
            }
        }
        return null;

    }

    noMoreTurns() {
        return !this.field.some(el => el.some(el => el === null));
    }

    isDraw() {
        return this.noMoreTurns() === true && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}
module.exports = TicTacToe;