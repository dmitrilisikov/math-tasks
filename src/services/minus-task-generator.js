import randomNumberGenerator from './random-number-generator';
import Task from './../model/task';
import OPERATIONS from './../constants/operations';

class MinusTaskGenerator {
  generateTask(maxValue) {
    const firstValue = randomNumberGenerator.generate(1, maxValue - 1);
    const secondValue = randomNumberGenerator.generate(1, firstValue);

    return new Task(firstValue, OPERATIONS.MINUS, secondValue);
  }
}

export default new MinusTaskGenerator();

