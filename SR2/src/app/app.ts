import { Component, signal } from '@angular/core';
// @ts-ignore                                          //цей коментар необхіден для ігнорування можливих помилок при імпорті
import { createTable } from './assets/table.js';
// @ts-ignore
import { movePlayer } from './assets/table.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',

  //сторінку можна прописувати через компоненти, але для мене простіше і звичніше використовувати для цього окремі файли

  // template: `
  //   Hello
  // `,
  // styles: `
  //   :host {
  //     color: blue;
  //   }
  // `,
})
export class App{
    ngOnInit() {
      createTable(); 
    }

    moveUp()    { movePlayer('up'); }
    moveDown()  { movePlayer('down'); }
    moveLeft()  { movePlayer('left'); }
    moveRight() { movePlayer('right'); }
}

           

