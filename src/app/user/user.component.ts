import { Component, computed,EventEmitter,Input,Output,signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

    @Input({required:true}) user!: User;
    @Input({required:true}) selected!: boolean;
    @Output() select = new EventEmitter();
    
    get imagePath(){
      return this.user.avatar
    }

    onSelectedUser(){
      this.select.emit(this.user.id);
    }
}
