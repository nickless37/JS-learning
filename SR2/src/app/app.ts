import { Component, signal } from '@angular/core';
// @ts-ignore                                          //цей коментар необхіден для ігнорування можливих помилок при імпорті
import { createTable } from './assets/table.js';
// @ts-ignore
import { movePlayer } from './assets/table.js';
// // @ts-ignore
// import { PositionData } from './assets/table.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',

  //сторінку можна прописувати через компоненти, але для мене простіше і звичніше використовувати для цього окремі файли

  // template: `
  //   Testing
  // `,
  // styles: `
  //   :host {
  //     color: blue;
  //   }
  // `,

})

// @Component({
//   selector: 'app-data',
//   template: `
//     pos: {{}}
//   `,
// })

export class App{
    ngOnInit() {
      createTable(); 
    }

    moveUp()    { movePlayer('up'); }
    moveDown()  { movePlayer('down'); }
    moveLeft()  { movePlayer('left'); }
    moveRight() { movePlayer('right'); }

  textbox1 = 'Протягом роботи я намагався реалізувати можливості angular. Деталізація у фреймворці вражає, але це значно повищує поріг входу. Так як фреймворк використовує переважно ts...'
}

           

