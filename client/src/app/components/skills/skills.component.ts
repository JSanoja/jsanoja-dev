import { Component, OnInit } from '@angular/core';
import { ISkills } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'js-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: ISkills;
  constructor(private dataset: DataService) {
    this.skills = this.dataset.getSkils()
  }

  ngOnInit(): void {
  }

}
