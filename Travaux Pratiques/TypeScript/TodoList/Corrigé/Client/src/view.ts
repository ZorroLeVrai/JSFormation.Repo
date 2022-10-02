import Model from './model.js';
import Task from './task.js';

type HandleTaskSelectedFunc = (taskId: string, checked: boolean) => void;
type HandleNewTaskFunc = (newTaskTitle: string) => void;
type HandleAction = () => void;

export default class View {
  private todoListElement;
  private doneListElement;
  private formElement;
  private inputNewTaskElement;
  private todoActionElement;
  private doneActionElement;
  private deleteActionElement;
  private handleTaskSelectedCallback: HandleTaskSelectedFunc | null;

  constructor() {
    this.todoListElement = document.getElementById("task-todo") as HTMLUListElement | null;
    this.doneListElement = document.getElementById("task-done") as HTMLUListElement | null;
    this.formElement = document.getElementById("new-task-form") as HTMLFormElement | null;
    this.inputNewTaskElement = document.getElementById("new-task-title") as HTMLInputElement | null;
    this.todoActionElement = document.getElementById("todo-action") as HTMLButtonElement | null;
    this.doneActionElement = document.getElementById("done-action") as HTMLButtonElement | null;
    this.deleteActionElement = document.getElementById("delete-action") as HTMLButtonElement | null;
    this.handleTaskSelectedCallback = null;
  }

  bindHandleNewTask(handleNewTask: HandleNewTaskFunc) {
    this.formElement?.addEventListener("submit", event => {
      event.preventDefault();
      handleNewTask(this.inputNewTaskElement?.value ?? "");
    });
  }

  bindHandleMakeTodoTasks(handleMakeTodoTasks: HandleAction) {
    this.todoActionElement?.addEventListener("click", event => handleMakeTodoTasks());
  }

  bindHandleMakeDoneTasks(handleMakeDoneTasks: HandleAction) {
    this.doneActionElement?.addEventListener("click", event => handleMakeDoneTasks());
  }

  bindHandleDeleteTasks(handleDeleteTasks: HandleAction) {
    this.deleteActionElement?.addEventListener("click", event => handleDeleteTasks());
  }

  bindHandleTaskSelected(handleTaskSelected: HandleTaskSelectedFunc) {
    this.handleTaskSelectedCallback = handleTaskSelected;
  }

  clearNewTaskInput() {
    if (this.inputNewTaskElement)
      this.inputNewTaskElement.value = "";
  }

  render(model: Model) {
    this.clearLists();
    for (const task of model.getAllTasks())
    {
      this.addListItem(model, task);
    }
  }

  addListItem(model: Model, task: Task) {
    const listItem = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.addEventListener("change", this.handleTaskCheckBoxEventListener.bind(this));//(event) => this.handleTaskCheckBoxEventListener(event));
    checkbox.type = "checkbox";
    checkbox.dataset.id = task.id;
    checkbox.checked = model.isTaskIsSelected(task.id);
    label.textContent = task.title;
    listItem.append(checkbox, label);
  
    if (task.completed)
      this.doneListElement?.append(listItem);
    else 
      this.todoListElement?.append(listItem);
  }

  private handleTaskCheckBoxEventListener(event: Event) {
    const taskElement = event.target as HTMLInputElement;
    const taskId = taskElement.dataset.id ?? "";
    this.handleTaskSelectedCallback?.(taskId, taskElement.checked);
  }
  
  clearLists() {
    if (this.todoListElement)
      this.todoListElement.innerHTML = "";
  
    if (this.doneListElement)
      this.doneListElement.innerHTML = "";
  }
}