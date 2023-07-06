import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'js-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  personal: IProfile;
  constructor(private dataset: DataService) {
    this.personal = this.dataset.getPersonal();
  }

  ngOnInit(): void {
  }

}
