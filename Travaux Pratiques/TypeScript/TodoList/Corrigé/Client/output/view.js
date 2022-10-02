export default class View {
    constructor() {
        this.todoListElement = document.getElementById("task-todo");
        this.doneListElement = document.getElementById("task-done");
        this.formElement = document.getElementById("new-task-form");
        this.inputNewTaskElement = document.getElementById("new-task-title");
        this.todoActionElement = document.getElementById("todo-action");
        this.doneActionElement = document.getElementById("done-action");
        this.deleteActionElement = document.getElementById("delete-action");
        this.handleTaskSelectedCallback = null;
    }
    bindHandleNewTask(handleNewTask) {
        var _a;
        (_a = this.formElement) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", event => {
            var _a, _b;
            event.preventDefault();
            handleNewTask((_b = (_a = this.inputNewTaskElement) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "");
        });
    }
    bindHandleMakeTodoTasks(handleMakeTodoTasks) {
        var _a;
        (_a = this.todoActionElement) === null || _a === void 0 ? void 0 : _a.addEventListener("click", event => handleMakeTodoTasks());
    }
    bindHandleMakeDoneTasks(handleMakeDoneTasks) {
        var _a;
        (_a = this.doneActionElement) === null || _a === void 0 ? void 0 : _a.addEventListener("click", event => handleMakeDoneTasks());
    }
    bindHandleDeleteTasks(handleDeleteTasks) {
        var _a;
        (_a = this.deleteActionElement) === null || _a === void 0 ? void 0 : _a.addEventListener("click", event => handleDeleteTasks());
    }
    bindHandleTaskSelected(handleTaskSelected) {
        this.handleTaskSelectedCallback = handleTaskSelected;
    }
    clearNewTaskInput() {
        if (this.inputNewTaskElement)
            this.inputNewTaskElement.value = "";
    }
    render(model) {
        this.clearLists();
        for (const task of model.getAllTasks()) {
            this.addListItem(model, task);
        }
    }
    addListItem(model, task) {
        var _a, _b;
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.addEventListener("change", this.handleTaskCheckBoxEventListener.bind(this)); //(event) => this.handleTaskCheckBoxEventListener(event));
        checkbox.type = "checkbox";
        checkbox.dataset.id = task.id;
        checkbox.checked = model.isTaskIsSelected(task.id);
        label.textContent = task.title;
        listItem.append(checkbox, label);
        if (task.completed)
            (_a = this.doneListElement) === null || _a === void 0 ? void 0 : _a.append(listItem);
        else
            (_b = this.todoListElement) === null || _b === void 0 ? void 0 : _b.append(listItem);
    }
    handleTaskCheckBoxEventListener(event) {
        var _a, _b;
        const taskElement = event.target;
        const taskId = (_a = taskElement.dataset.id) !== null && _a !== void 0 ? _a : "";
        (_b = this.handleTaskSelectedCallback) === null || _b === void 0 ? void 0 : _b.call(this, taskId, taskElement.checked);
    }
    clearLists() {
        if (this.todoListElement)
            this.todoListElement.innerHTML = "";
        if (this.doneListElement)
            this.doneListElement.innerHTML = "";
    }
}
//# sourceMappingURL=view.js.map