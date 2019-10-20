import randomNumberGenerator from './random-number-generator';
import Task from './../model/task';
import OPERATIONS from './../constants/operations';

class PlusTaskGenerator {
  generateTask(maxValue) {
    const firstValue = randomNumberGenerator.generate(1, maxValue - 1);
    const secondValue = randomNumberGenerator.generate(1, maxValue - firstValue);

    return new Task(firstValue, OPERATIONS.PLUS, secondValue);
  }
}

export default new PlusTaskGenerator();

