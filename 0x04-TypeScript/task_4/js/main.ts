// Importing necessary classes and interfaces
import { Teacher } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10, 
};

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher()); 

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());  
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher); 
console.log(react.getAvailableTeacher());
