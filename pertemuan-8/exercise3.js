let deeva = {
    firstName: "Deeva",
    weight: 49,
    height: 162,
    calculateBMI: function () {
        let konvertHeight = this.height / 100;
        let bmi = this.weight / (konvertHeight * konvertHeight);
        if (bmi < 16.0) {
            return "Severely Underweight";
        } else if (bmi > 16.0 && bmi <= 18.4) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            return "Overweight";
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            return "Moderately Obese";
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            return "Severely Obese";
        } else if (bmi >= 40.0) {
            return "Morbidly Obese";
        };
    },
};
deeva["BMI"] = deeva.calculateBMI();
console.log(deeva);



