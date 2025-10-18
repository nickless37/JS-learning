import { Component, signal } from '@angular/core';
// @ts-ignore                                          //цей коментар необхіден для ігнорування можливих помилок при імпорті
import { createTable } from './assets/table.js';
// @ts-ignore
import { movePlayer } from './assets/table.js';
// @ts-ignore
import { PositionData } from './assets/table.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',

  //сторінку можна прописувати через компоненти, але для мене простіше і звичніше використовувати для цього окремі файли

  // template: `
  //   Testing
  // `,
  styles: `
    :host {
      font-size: 20px;
    }
  `,

  //всі елементи, що прописуються у template, можна перенести у app.html без змін

  // template: `
  //   @if(checkup){
  //     <span>No, the server is not running</span>
  //     textbox2 ='you are in end of field';
  //   }
  //   @if (isServerRunning) {
  //   <span>Yes, the server is running</span>
  //   } @else {
  //   <span>No, the server is not running</span>
  //   }
  // `
  

})



export class App{
  ngOnInit() {
    createTable(); 
    this.check();
  }

  moveUp()    { movePlayer('up'); }
  moveDown()  { movePlayer('down'); }
  moveLeft()  { movePlayer('left'); }
  moveRight() { movePlayer('right'); }
  
  cords = [0, 0];
  checkup = false;

  textbox1 = 'Протягом роботи я намагався реалізувати можливості angular. Деталізація у фреймворці вражає, але це значно повищує поріг входу. Я намагався реалізувати мінігру за допомогою ts, але зіштовхнувся з помилками, з якими я не маю досвіду і виправлення яких займе надто багато часу, через що зробив більшу її частину через додатковий файл js, що є в певній мірі костилем. На мою думку angular був створений для великих проектів, де модульність має значення. Однак, хочу похвалити angular за позначення помилок та пропонування рішення. Найбільшу кількість проблем у мене викликали невелика різниця між ts i js та структурованість проєкта.'

  textbox2 ='';
  
  checkButton(){
    this.chekcup = this.check();
  }
  chekcup = this.check();
  
  check() {
    this.cords = PositionData();

    if (this.cords[0] === 9 && this.cords[1] === 9) {
      // console.log(this.cords)
      // console.log(this.checkup)
      this.checkup = true
      return true;
      // this.textbox2 = 'Ви дійшли до кінця поля!';
    } else {
      this.checkup = false
      return false;
      this.textbox2 = '';
    }
  }
  // isServerRunning = true;
}

           

