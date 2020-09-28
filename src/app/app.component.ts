import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'website';
  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
