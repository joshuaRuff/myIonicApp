import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  todo: string = '';
  items = [];

  constructor() {}

  addTodo(item) {
    if (this.todo.length > 0) {
      const newTodo = {
        text: this.todo
      };
      this.items.push(newTodo);
      this.todo = '';
    }
  }

  removeTodo(text) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].text === text) {
        this.items.splice(i, 1);
        break;
      }
    }
  }
}
