import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'js-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: Array<IExperience>;
  constructor(private dataset: DataService) {
    this.experience = this.dataset.getExperience()
   }

  ngOnInit(): void {
  }

}
