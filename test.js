class One_dice {
    constructor() {
        this.value = this.new_value();
    }
    new_value() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

class Dice_set {
    constructor(size = 5) {
        this.dice = [];
        this.dice_no = [0, 0, 0, 0, 0, 0, 0];
        this.set_sum = 0;

        for (let i = 0; i < size; i++) {
            this.dice.push(new One_dice());
        }
        this.calculateDiceValues();
        this.set_sum = this.calculateDiceSetSum(this.dice);
    }

    calculateDiceValues() {
        this.dice.map(current_value => {
            this.dice_no[current_value.value]++;
        })
    }

    checkPair() {
        let pairs = false;
        for (let i = 0; i <= 6; i++) {
            if (this.dice_no[i] == (2 || 3 || 4 || 5)) {
                pairs = i * 2;
            }
        }
        return pairs;
    }

    checkTwoPairs() {
        let twoPairs = false;
        for (let i = 6; i >= 1; i--) {
            if (this.dice_no[i] === (2)) {
                twoPairs = i;
                twoPairs += twoPairs
                console.log("two pairs1: " + twoPairs);
            }

        }
        console.log("sum two pairs: " + twoPairs);
        return twoPairs;
    }


    checkThrees() {
        // if (this.dice_no.includes(3) || this.dice_no.includes(4) || this.dice_no.includes(5)) {
        let threes = false;
        for (let i = 6; i >= 0; i--) {
            if (this.dice_no[i] == 3) {
                threes = i * 3;

                //return this.dice_no
            } // else return false;
        }
        //}
        return threes;
    }


    checkFourOfAKind() {
        let fours = false;
        for (let i = 1; i <= 6; i++) {
            if (this.dice_no[i] == 4) {
                fours = i * 4;
            }
        }
        return fours;
    }

    checkFullHouse() {
        let twos = 0;
        let threes = 0;
        for (let i = 1; i <= 6; i++) {
            if (this.dice_no[i] == 2) {
                twos = i * 2;
            }
            if (this.dice_no[i] == 3) {
                threes = i * 3;
            }
        }
        if ((twos > 0) && (threes > 0)) {
            return twos + threes;
        } else {
            return false;
        }
    }

    calculateDiceSetSum(dice) {
        return dice.reduce((previous_value, current_dice) => {
            return previous_value + current_dice;
        }, 0);
    }

}



//let dice = new One_dice();
//console.log(dice);

for (let i = 0; i < 10; i++) {
    let sDice = new Dice_set();
    console.log(sDice.dice);
    console.log(sDice.dice_no);
    console.log("Ett par: " + sDice.checkPair());
    console.log("Två par: " + sDice.checkTwoPairs());
    console.log("Triss: " + sDice.checkThrees());
    console.log("Fyrtal: " + sDice.checkFourOfAKind());
    console.log("Kåk: " + sDice.checkFullHouse());
}