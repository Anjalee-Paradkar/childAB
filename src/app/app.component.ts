import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childAB';

  dataB ='Hello component B';

  items=['',];

  addItemA(value:any){
    this.items.push(value);
  }


}
