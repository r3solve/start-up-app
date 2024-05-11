import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss'],
  standalone:true,
  imports:[ IonicModule ]
})
export class AddEntryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
