module.exports = function toReadable(number) {
    const oneTo19 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const twentyTo90 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let firstDigit = Number(number.toString()[0]),
        secondDigit = Number(number.toString()[1]),
        thirdDigit = Number(number.toString()[2]);
    if (number < 20) {
        return oneTo19[number];
    } else if (number > 19 && number < 100) {
        if (secondDigit == 0) {
            return twentyTo90[firstDigit - 2];
        } else {
            return `${twentyTo90[firstDigit - 2]} ${oneTo19[secondDigit]}`;
        }
    } else if (number > 99 && number < 1000) {
        if (secondDigit == 0 && thirdDigit == 0) {
            // Второе и 3 числа равны 0
            return `${oneTo19[firstDigit]} hundred`;
        } else if (parseInt(secondDigit.toString() + thirdDigit.toString()) < 20) {
            // Второе + 3 число меньше 20
            return `${oneTo19[firstDigit]} hundred ${oneTo19[parseInt(secondDigit.toString() + thirdDigit.toString())]}`;
        } else if (thirdDigit == 0) {
            // Третье число равно 0
            return `${oneTo19[firstDigit]} hundred ${twentyTo90[secondDigit - 2]}`;
        } else {
            // Числа от х21 до х99
            return `${oneTo19[firstDigit]} hundred ${twentyTo90[secondDigit - 2]} ${oneTo19[thirdDigit]}`
        }
    }
};

