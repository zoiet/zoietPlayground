import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  title = 'Zoiet Playground';
  intro = "Hi there! I'm a Software Developer from Singapore. This is my playground where I record my personal projects.";

  moreIntro = "I build software application. Here are some of my works"
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}
