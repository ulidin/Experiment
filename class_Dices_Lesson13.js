class Dice {
    constructor(size = 5) {
        this.dice = [];
        this.dice_values = [0, 0, 0, 0, 0, 0, 0];
        for (let i = 0; i < size; i++) {
            this.dice.push(new Die());
        }
        this.calculateDiceValues();
    }
    calculateDiceValues() {
        this.dice.map(current_value => {
            this.dice_values[current_value.value]++;
        })
    }
    checkFullHouse() {
        let twos = 0;
        let threes = 0;
        for (let i = 1; i <= 6; i++) {
            if (this.dice_values[i] == 2) {
                twos = i * 2;
            }
            if (dice_values[i] == 3) {
                threes = i * 3;
            }
        }
        if ((twos > 0) && (threes > 0)) {
            return twos + threes;
        } else {
            return false;
        }
    }
    checkFourOfAKind() {
        let fours = false;
        for (let i = 1; i <= 6; i++) {
            if (this.dice_values[i] == 4) {
                fours = i * 4;
            }
        }
        return fours;
    }
    checkThrees() {
            // do stuff
            let sum = this.diceSum([4, 6, 8])
        }
        // this.diceSum([4, 5, 6])
    diceSum(dice) {
        return dice.reduce((previous_value, current_die) => {
            return previous_value + current_die;
        }, 0);
        /*
        previous_value  |  current_die  |  previous_value + current_die
        ----------------+---------------+--------------------------------------
                0                 4                   4
                4                 5                   9
                9                 6                   15
        */
    }
}
class Die {
    constructor() {
        this.value = this.new_value();
    }
    new_value() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
let dice;
/*for (let i = 0; i < 10; i++) {
    dice = new Dice();
    console.log(dice.dice);
    console.log(dice.dice_values);
}
*/
dice = new Dice();
console.log(dice.dice);
console.log(dice.dice_values);