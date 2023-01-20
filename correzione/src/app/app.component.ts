import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'correzione';
  post_vect : Post[] = [];

  invia(user : HTMLInputElement, message: HTMLInputElement) 
  {
    this.post_vect.push(new Post (user.value, message.value));
    console.log(this.post_vect)
  }
}
