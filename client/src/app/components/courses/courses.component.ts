import { Component, OnInit } from '@angular/core';
import { IEducation } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'js-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Array<IEducation>;
  constructor(private dataset: DataService) {
    this.courses = this.dataset.getCourses()
   }

  ngOnInit(): void {
  }

}
