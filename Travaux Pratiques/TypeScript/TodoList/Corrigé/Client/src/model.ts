import Task from './task';

export default class Model {
  private taskDico: Map<string, Task>;
  private selectedTasks: Set<string>;

  constructor() {
    this.taskDico = new Map<string, Task>();
    this.selectedTasks = new Set<string>();
  }

  addTasks(tasks: Task[]) {
    for (let task of tasks)
    {
      this.addTask(task);
    }
  }

  addTask(task: Task) {
    this.taskDico.set(task.id, task);
  }

  deleteTaskById(taskId: string) {
    this.selectedTasks.delete(taskId);
    return this.taskDico.delete(taskId);
  }

  getTaskById(taskId: string) {
    return this.taskDico.get(taskId);
  }

  getSelectedTasks() {
    return new Set(this.selectedTasks);
  }

  selectTaskById(taskId: string) {
    this.selectedTasks.add(taskId);
  }

  unselectTaskById(taskId: string) {
    this.selectedTasks.delete(taskId);
  }

  isTaskIsSelected(taskId: string) {
    return this.selectedTasks.has(taskId);
  }

  getAllTasks() {
    return Array.from(this.taskDico.values());
  }

  setStatusByTaskId(taskId: string, isCompleted: boolean) {
    const task = this.taskDico.get(taskId);
    if (task)
      task.completed = isCompleted;
  }
}