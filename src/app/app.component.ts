import { Component, OnInit } from '@angular/core';
import { filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FMR';

  ngOnInit(): void {
    fromEvent(document, 'mouseover')
      .pipe(filter((event: MouseEvent) =>
        (event.target as HTMLElement).nodeName.toLowerCase() === 'img'))
      .subscribe(s => console.log(s.target as HTMLElement));
  }

}
