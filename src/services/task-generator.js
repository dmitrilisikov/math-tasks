import plusTaskGenerator from './plus-task-generator';
import minusTaskGenerator from './minus-task-generator';
import arrayShuffler from './array-shuffler';

class TaskGenerator {
  generateTasks(maxValue, taskCount) {
    const tasks = [];

    for (let i = 0; i < taskCount; i++) {
      tasks.push(plusTaskGenerator.generateTask(maxValue));
    }
    
    for (let i = 0; i < taskCount; i++) {
      tasks.push(minusTaskGenerator.generateTask(maxValue));
    }

    return arrayShuffler.shuffle(tasks);
  }
}

export default new TaskGenerator();