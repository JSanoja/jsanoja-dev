import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'js-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  education: Array<IEducation>;
  constructor(private dataset: DataService) {
    this.education = this.dataset.getEducation()
   }

  ngOnInit(): void {
  }

}
