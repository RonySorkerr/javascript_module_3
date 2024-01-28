// light condition
const light = true;
switch (light) {
    case light:
        console.log('Your light is on.');
        break;

    default:
        console.log('Your light is off.')
        break;
}
// grading condition

function gradingCalc(score) {
    let gradingCalc;

    switch (true) {
        case (score >= 90 && score <= 100):
            gradingCalc = "A+";
            break;

        case (score >= 80 && score <= 89):
            gradingCalc = "A";
            break;

        case (score >= 70 && score <= 79):
            gradingCalc = "B";
            break;

        case (score >= 50 && score <= 69):
            gradingCalc = "C";
            break;

        case (score >= 40 && score <= 49):
            gradingCalc = "D";
            break;

        case (score > 0 && score < 40):
            gradingCalc = "What did you do in the exam hall?";
            break;

        default:
            gradingCalc = "Well done beta.......";
    }

    return `You got ${gradingCalc} Grade.`;
}

const Rahim = gradingCalc(85);
console.log(Rahim);
