export default class Model {
    constructor() {
        this.taskDico = new Map();
        this.selectedTasks = new Set();
    }
    addTasks(tasks) {
        for (let task of tasks) {
            this.addTask(task);
        }
    }
    addTask(task) {
        this.taskDico.set(task.id, task);
    }
    deleteTaskById(taskId) {
        this.selectedTasks.delete(taskId);
        return this.taskDico.delete(taskId);
    }
    getTaskById(taskId) {
        return this.taskDico.get(taskId);
    }
    getSelectedTasks() {
        return new Set(this.selectedTasks);
    }
    selectTaskById(taskId) {
        this.selectedTasks.add(taskId);
    }
    unselectTaskById(taskId) {
        this.selectedTasks.delete(taskId);
    }
    isTaskIsSelected(taskId) {
        return this.selectedTasks.has(taskId);
    }
    getAllTasks() {
        return Array.from(this.taskDico.values());
    }
    setStatusByTaskId(taskId, isCompleted) {
        const task = this.taskDico.get(taskId);
        if (task)
            task.completed = isCompleted;
    }
}
//# sourceMappingURL=model.js.map