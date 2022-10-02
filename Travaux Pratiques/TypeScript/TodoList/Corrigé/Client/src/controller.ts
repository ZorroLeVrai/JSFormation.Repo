import Model from './model.js';
import View from './view.js';
import Task from './task.js';


const idGenerator = () => String(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));

export default class Controller {
  private model: Model;
  private view: View;

  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;

    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleTaskSelected = this.handleTaskSelected.bind(this);
    this.handleMakeTodoTasks = this.handleMakeTodoTasks.bind(this);
    this.handleMakeDoneTasks = this.handleMakeDoneTasks.bind(this);
    this.handleMakeDeleteTasks = this.handleMakeDeleteTasks.bind(this);

    //binding
    this.view.bindHandleNewTask(this.handleNewTask);
    this.view.bindHandleTaskSelected(this.handleTaskSelected);
    this.view.bindHandleMakeTodoTasks(this.handleMakeTodoTasks);
    this.view.bindHandleMakeDoneTasks(this.handleMakeDoneTasks);
    this.view.bindHandleDeleteTasks(this.handleMakeDeleteTasks);
  }

  private handleActionEvent(handleTask: (taskId: string) => void) {
    for(const taskId of this.model.getSelectedTasks()) {
      handleTask.call(this, taskId);
    }
    this.view.render(this.model);
  }

  handleMakeTodoTasks() {
    this.handleActionEvent(this.handleTodoTasks);
  }

  handleMakeDoneTasks() {
    this.handleActionEvent(this.handleDoneTasks);
  }

  handleMakeDeleteTasks() {
    this.handleActionEvent(this.handleDeleteTasks);
  }

  handleTodoTasks(taskId: string) {
    this.model.setStatusByTaskId(taskId, false);
    this.model.unselectTaskById(taskId);
  }

  handleDoneTasks(taskId: string) {
    this.model.setStatusByTaskId(taskId, true);
    this.model.unselectTaskById(taskId);
  }

  handleDeleteTasks(taskId: string) {
    this.model.deleteTaskById(taskId);
  }

  handleNewTask(newTaskTitle: string) {
    if (newTaskTitle === "")
      return;

    const taskId = idGenerator();
    const newTask: Task = {
      id: taskId,
      title: newTaskTitle,
      completed: false
    }

    this.model.addTask(newTask);

    this.view.clearNewTaskInput();
    this.view.render(this.model);
  }

  handleTaskSelected(taskId: string, checked: boolean) {
    if (checked)
      this.model.selectTaskById(taskId);
    else
      this.model.unselectTaskById(taskId);

    this.view.render(this.model);
  }
}