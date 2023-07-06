import { Injectable } from '@angular/core';
import { IEducation, IExperience, IProfile, ISkills } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private personal: IProfile = {
    name: "Juan M. Sanoja Peña",
    charge: "Software Tech Leader",
    phone: "+5491127599166",
    country: "Argentina",
    nationality: "Venezuelan",
    birthDate: "27/08/1985",
    age: "37",
    email: "juan.sanoja@gmail.com",
    linkedin: "linkedin.com/in/jsanoja"
  }
  private education: Array<IEducation> = [
    {
      institution:"Instituto “Juan XXIII” Hermanos Maristas",
      type:"Basic Study",
      grade:"Bachelor",
      site: "Punto Fijo - Venezuela",
      date: new Date("2002")
    },
    {
      institution:"University Yacambú" ,
      type:"Degree Study",
      grade:"Computer Electronic Engineer",
      site: "Barquisimeto - Venezuela",
      date: new Date("2008")
    },
    {
      institution:"University “Jose Antonio Paez”",
      type:"Postgraduate Study",
      grade:"Specialist in Process automation",
      site:"Valencia - Venezuela",
      date: new Date("2014")
    }
  ]
  private experience: Array<IExperience> =[
    {
      start: new Date("2019"),
      end: new Date("2023"),
      charge:"Tech Lead Software Engineering",
      country:"Argentina",
      company:"SpaceSUR",
      description:"Developing and leading solutions for large-scale Geospatial projects for large companies such as Unicef, CONAE, Ministry of National Security, among others, using innovative technologies. Participate in 3 great developments of the company. The Geoplatform is a GIS Viewer with innovative tools developed with React, Python. For the security ministry 'SISGEO' (Geospatial intelligence system) developed in Luciad and NodeJS and a Catalog and satellite image processors. Developed in NodeJS, Angular and Python"
    },
    {
      start: new Date("2017"),
      end: new Date("2019"),
      charge:"Sr. Full-Stack",
      country:"Argentina",
      company:"Dos al Cubo",
      description:"With Scrum / Agile methodology, I performed architecture, engineering and development tasks for CMS Thinkindot, a product for Massive Content portals. I used technologies like Angular, Node.js, Typescript, Symphony, AngularJS, React, Sass, CSS, HTML5, PHP, Express."
    },
    {
      start: new Date("2011"),
      end: new Date("2017"),
      charge:"Full-stack Developer",
      country:"Venezuela & Argentina",
      company:"Freelance",
      description:"Working on web development projects for agencies & independent projects"
    },
    {
      start: new Date("2011"),
      end: new Date("2015"),
      charge:"Full-stack Developer",
      country:"Venezuela",
      company:"Voluntary - Social work",
      description:"Caminos Verdes Foundation, Department of Culture of the university Lizandro Alvarado, Clowns Without Borders Switzerland"
    }
  ]
  private skills : ISkills = {
    frontend: ["HTML", "CSS", "Less", "Sass", "Javascript", "Twigg", "Django"],
    backend: ["PHP", "NodeJS", "Python", "JAVA"],
    devOps: ["Git runners", "Vercel", "NowSH", "Jenkins", "Shellscript", "batch", "dpkg linux .deb"],
    pM: ["Assana", "Slack", "Trello", "Jira", "Customs Agiles tracker"],
    databases: ["MySQL", "MongoDB", "Postgree", "PostGIS", "MariaDB"],
    packages: ["Google APIs", "ML APIs", "paypal APIs", "Btc APIs", "Mootools", "jQuery", "AMP", "NPM", "pip"],
    frameworks: ["Bootstrap", "Express", "Angular", "React", "Vue", "NextJS"],
    electronic: ["Basic", "Assembler", "Picbasic", "Microcontroladores", "PLC", "SCADA"],
    design: ["Fireworks", "Photoshop", "Illustrator", "Lightroom"],
    hobbies: ["Acrobatic Gymnastics", "Sports Juggling", "Guitar", "Hiking", "Tennis", "Soccer and Video Games"]

  }
  constructor() { }
  getPersonal() : IProfile {
    return this.personal
  }
  getExperience(): Array<IExperience> {
    return this.experience
  }
  getEducation(): Array<IEducation> {
    return this.education
  }
  getSkils(): ISkills {
    return this.skills
  }
}
