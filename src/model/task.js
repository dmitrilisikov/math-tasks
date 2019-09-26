class Task {
  constructor(firstValue, operation, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
    this.operation = operation;
  }  

  toString() {
    return this.firstValue + ' ' + this.operation + ' ' + this.secondValue + ' = ___';
  }
}

export default Task;