export interface IProfile {
  name: string
  charge: string
  phone: string
  country: string
  nationality: string
  birthDate: string
  age: string
  email: string
  linkedin: string
}
export interface IEducation {
  institution:string
  type:string
  grade:string
  site: string
  date: Date
}
export interface IExperience {
  start: Date
  end: Date
  charge: string
  country: string
  company: string
  description: string
}
export interface ISkills {
  frontend: string
  backend: string
  devOps: string
  pM: string
  databases: string
  packages: string
  frameworks: string
  electronic: string
  design: string
  hobbies: string
}
