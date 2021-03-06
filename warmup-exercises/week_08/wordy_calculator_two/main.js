var Calculator = {

  operations: [ "plus", "minus", "multiplied by", "divided by" ],

  generateProblem: function () {
    var firstNum = Math.floor( (Math.random() * 100) + 1 );
    var operationIndex = Math.floor( (Math.random() * 4) );
    var operation = this.operations[ operationIndex ];
    var secondNum = Math.floor( (Math.random() * 100) + 1 );

    // This uses a ternary conditional - basically they are a condensed if statement.
    // They both say that if the number generated by Math.random() is less than 0.35, add a minus sign at the beginning of the number, otherwise just leave it alone
    var firstNum = Math.random() < 0.35 ? "-" + firstNum : firstNum;
    var secondNum = Math.random() < 0.35 ? "-" + secondNum : secondNum;

    var problem = "What is " + firstNum + " " + operation + " " + secondNum + "?";

    var solution = this.wordProblem( problem );
    console.log( "\t", solution );
  },

  wordProblem: function ( problem ) {
    console.log( problem );
    var matcher = /(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/;
    var result = problem.match( matcher );
    // var resultWithExec = matcher.exec( problem );

    var firstNum = parseInt( result[1] );
    var operation = result[2];
    var secondNum = parseInt( result[3] );

    switch ( operation ) {
      case "plus" :
        return firstNum + secondNum;
      case "minus" :
        return firstNum - secondNum;
      case "divided by" :
        return firstNum / secondNum;
      case "multiplied by" :
        return firstNum * secondNum;
    }
  }
}

console.log( "HARD CODED QUESTIONS\n\n" );
var problem = "What is 15 plus 17?";
var solution = Calculator.wordProblem( problem );
console.log( "\t", solution );

var problem_two = "What is 20 minus 20?";
var solution_two = Calculator.wordProblem( problem_two );
console.log( "\t", solution_two );

var problem_three = "What is -30 multiplied by 2?";
var solution_three = Calculator.wordProblem( problem_three );
console.log( "\t", solution_three );

var problem_four = "What is -30 divided by 4?";
var solution_four = Calculator.wordProblem( problem_four );
console.log( "\t", solution_four );

console.log( "\n\nGENERATED QUESTIONS\n\n" );
Calculator.generateProblem();
Calculator.generateProblem();
Calculator.generateProblem();
Calculator.generateProblem();