import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnInit {
    title = "To Do ";

    name = new FormControl("");

    taskList: string[] = [];
    checkList: string[] = [];

    public addTask(name) {
        this.taskList.push(name.value);
        console.log("Add Task", this.taskList);
        name.reset();
    }

    public onChecked(t) {
        this.taskList = this.taskList.filter(ele => {
            return ele !== t;
        });
        console.log("Remove Task", this.taskList);
        this.checkList.push(t);
    }

    public onDelete(t) {
        console.log("Checked");
        this.taskList.forEach((ele, ind) => {
            if (ele === t) {
                this.taskList.slice(ind);
            }
        });
    }

    ngOnInit() {
        console.log("Start of To DO");
    }
}
