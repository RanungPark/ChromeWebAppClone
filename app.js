const calculator = {
  add : function(firstNume, secondNume){
    console.log(firstNume + secondNume);
  },
  minus  : function(firstNume, secondNume){
    console.log(firstNume - secondNume);
  },
  divide : function(firstNume, secondNume){
    console.log(firstNume / secondNume);
  },
  powerof : function(firstNume, secondNume){
    console.log(firstNume ** secondNume);
  },
};

calculator.add(10,5);
calculator.minus(10,5);
calculator.divide(10,5);
calculator.powerof(10,5);