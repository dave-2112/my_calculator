var a = 0;
var b = 0;
var d = 100;
var operator = undefined;
var result = undefined;
function getInputNumber(num) {
    if (this.a == 0) {
        this.a = num
    } else this.b = num;
}

function getOperator(operator) {
    this.operator = operator;
}

function calculateResult() {
    switch (this.operator) {
        case '/':
            this.result = this.a / this.b;
            break;
        case '-':
            this.result = this.a - this.b;
            break;
        case '*':
            this.result = this.a * this.b;
            break;
            case '+':
            this.result = this.a + this.b;
            break;
            case '%':
            this.result = this.a / c;
    }
    console.log(this.result)
    var display = document.getElementById("resultSection");
    display.innerHTML = result;
    console.log(this.a, this.operator, this.b, this.result)
    this.resetVariables();
}

function resetVariables() {
    this.a = 0;
    this.b = 0;
    this.operator = undefined;
}