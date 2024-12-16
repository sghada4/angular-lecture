import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {User} from "../user"
@Component({
  selector: 'app-my-component',
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent {
  @Input() parentMessage: string = '';

  @Output() notifyParent = new EventEmitter<User[]>();
  sendUsers() {
    this.notifyParent.emit(this.users);
  }
  msg: string = 'Welcome to my component';
  users = [
    { id: 1, name: 'user 1', email: 'u@u.u' },
    { id: 2, name: 'user 2', email: 'u2@u.u' },
    { id: 3, name: 'user 3', email: 'u3@u.u' },
    { id: 4, name: 'user 4', email: 'u4@u.u' },
  ];
}
