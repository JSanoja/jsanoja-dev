import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  personal: any = {
    name: "Juan M. Sanoja Peña",
    charge: "Software Tech Leader",
    phone: "+5491127599166",
    country: "Argentina",
    nationality: "Venezuelan",
    birthDate: "27/08/1985",
    age: "38",
    email: "juan.sanoja@gmail.com"
  }
  education: any = [
    {
      institution:"" ,
      grade:"",
      date: ""
    },
    {
      institution:"" ,
      grade:"",
      date: ""
    },
    {
      institution:"" ,
      grade:"",
      date: ""
    }
  ]
  experience:any =[
    {
      period:"",
      charge:"",
      country:"",
      company:"",
      description:""
    },
    {
      period:"",
      charge:"",
      country:"",
      company:"",
      description:""
    },
    {
      period:"",
      charge:"",
      country:"",
      company:"",
      description:""
    }
  ]
  constructor() { }
}
