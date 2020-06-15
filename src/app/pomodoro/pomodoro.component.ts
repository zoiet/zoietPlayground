import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-pomodoro",
    templateUrl: "./pomodoro.component.html",
    styleUrls: ["./pomodoro.component.scss"]
})
export class PomodoroComponent implements OnInit {
    taskList: string[] = [];
    checkList: string[] = [];

    inputMin = new FormControl("");

    countdownMin = 25;

    mins = 25;

    secs = this.mins * 60;

    isCounting: boolean = false;

    interval;

    public countdown() {
        this.interval = setTimeout(() => this.Decrement(), 1000);
    }

    //Decrement function decrement the value.
    public Decrement() {
        return this.mins;
    }

    public getminutes() {
        //minutes is seconds divided by 60, rounded down
        this.mins = Math.floor(this.secs / 60);
        if (this.mins < 10) {
            return this.mins.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        }
        return this.mins;
    }

    public getseconds() {
        let result = this.secs - Math.round(this.mins * 60);
        if (result === 0) {
            return result.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false
            });
        }
        return result;
    }

    public onStart() {
        console.log("onStart");
    }

    public onStop() {
        clearTimeout(this.interval);
    }

    public onResume() { }

    public onReset() { }

    ngOnInit() {
        console.log("Start of Pomodoro");
        this.isCounting = false;
    }
}
