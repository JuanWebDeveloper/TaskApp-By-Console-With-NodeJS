const moment = require('moment');
const { v4: idsGenerator } = require('uuid');

class Task {
  constructor(taskDescription) {
    this.id = idsGenerator();
    this.taskDescription = taskDescription;
    this.createdAt = `${moment(new Date().toISOString()).format('MMMM Do YYYY, h:mm:ss a')}`;
    this.taskCompleted = false;
    this.completedAt = null;
  }
}

module.exports = Task;
