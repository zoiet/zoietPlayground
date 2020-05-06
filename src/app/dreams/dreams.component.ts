import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dreams',
  templateUrl: './dreams.component.html',
  styleUrls: ['./dreams.component.scss']
})
export class DreamsComponent implements OnInit {
  title = 'Dreams';
  constructor() { }

  ngOnInit(): void {
  }

  todo = [
    'Pass Japanese N5',
    'Attaining driving license',
    'TESOL / TCSOL',
    'Yoga Teacher Course',
    'Be better at programming',
    'Draw frequently'
  ];

  done = [
    'Saving up $500 every month',
    'Eating Healthier',
    'Workout frequently HIIT / Yoga',
    'Have a IT job'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
