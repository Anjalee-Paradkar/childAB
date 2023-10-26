import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {

  @Output() a = new EventEmitter<any>();


  clickA(value: any){
    this.a.emit(value);
  }

}
