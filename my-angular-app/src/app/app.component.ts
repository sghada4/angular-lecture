import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { CommonModule } from '@angular/common';
import {User} from "./user"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular';
  allUsers: User[]=[]
  onNotify(users: User[]){
    this.allUsers=users
    
  }
}
