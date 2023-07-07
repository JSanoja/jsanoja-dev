import { Injectable } from '@angular/core';
import { IEducation, IExperience, IProfile, ISkills } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private personal: IProfile = {
    name: "Juan M. Sanoja Peña",
    charge: "Tech Lead - Software Engineer",
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
      institution:"University “Jose Antonio Paez”",
      type:"Postgraduate Study",
      grade:"Process Automation",
      site:"Valencia - Venezuela",
      date: new Date("2014")
    },
    {
      institution:"University Yacambú" ,
      type:"Degree Study",
      grade:"Computer Electronic Engineer",
      site: "Barquisimeto - Venezuela",
      date: new Date("2008")
    },
    {
      institution:"Institute “Juan XXIII” Hermanos Maristas",
      type:"Basic Study",
      grade:"Bachelor in Science",
      site: "Punto Fijo - Venezuela",
      date: new Date("2002")
    },
  ]
  private experience: Array<IExperience> =[
    {
      start: new Date("2019"),
      end: new Date("2023"),
      charge:"Tech Lead Software Engineer",
      country:"Argentina",
      company:"SpaceSUR",
      description:"Developing and leading large-scale Geospatial projects for major companies, such as Unicef, CONAE or Argentina Ministry of National Security. I have played a key role in some significant company developments like Geoplatform (GIS Viewer equipped with cutting-edge  tools, developed using React and Python) or SISGEO (Geospatial intelligence system, my notable contributions, built using Luciad and NodeJS), I also contributed to the creation of a Catalog and satellite image processors utilizing NodeJS, Angular, and Python."
    },
    {
      start: new Date("2017"),
      end: new Date("2019"),
      charge:"Sr. Full-Stack Developer",
      country:"Argentina",
      company:"Dos al Cubo",
      description:"Successfully executed architecture, engineering, and development tasks for CMS Thinkindot using the Scrum/Agile methodology. This particular product was designed for Massive Content portals. Throughout the project, I proficiently utilized a wide range of technologies including Angular, Node.js, TypeScript, Symfony, AngularJS, React, Sass, CSS, HTML5, PHP, and Express. My role and these technologies were instrumental in achieving the desired outcomes."
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
    frontend: ["HTML", "CSS", "Less", "Sass", "Javascript", "Twigg", "Django", "TypeScript"],
    backend: ["NodeJS", "Python", "JAVA", "PHP"],
    devOps: ["Git runners", "Vercel", "NowSH", "Jenkins", "Shellscript", "batch", "dpkg linux .deb"],
    pM: ["Assana", "Slack", "Trello", "Jira", "Customs Agiles tracker"],
    databases: ["MySQL", "MongoDB", "Postgree", "PostGIS", "MariaDB", "Firebase"],
    packages: ["Google APIs", "ML APIs", "paypal APIs", "Btc APIs", "Mootools", "jQuery", "AMP", "NPM", "pip"],
    frameworks: ["Bootstrap", "Express", "Angular", "React", "Vue", "NextJS"],
    electronic: ["Basic", "Assembler", "Picbasic", "Microcontroladores", "PLC", "SCADA"],
    design: ["Fireworks", "Photoshop", "Illustrator", "Lightroom"],
    hobbies: ["Acrobatic Gymnastics", "Sports Juggling", "Guitar", "Hiking", "Tennis", "Soccer and Video Games"],
    cloud: ["AWS", "Google CLoud", "Vmware", "Database cloud"]

  }
  private courses: Array<IEducation> = [
    {
      institution:"Udemy",
      type:"Online Course",
      grade:"Scrum Master",
      site:"Buenos Aires, Argentina",
      date: new Date("2020")
    },
    {
      institution:"Udemy",
      type:"Online Course",
      grade:"QGIS Introduction to GIS",
      site:"Buenos Aires, Argentina",
      date: new Date("2020")
    },
    {
      institution:"Mongo University",
      type:"Online Course",
      grade:"MongoDB for Nodejs",
      site:"Buenos Aires, Argentina",
      date: new Date("2019")
    },
  ]
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
  getCourses(): Array<IEducation>{
    return this.courses
  }
}
