const { v4: idsGenerator } = require('uuid');

class Task {
  constructor(taskDescription) {
    this.id = idsGenerator();
    this.taskDescription = taskDescription;
    this.createdAt = new Date().toISOString();
    this.taskCompleted = false;
    this.completedAt = null;
  }
}

module.exports = Task;
