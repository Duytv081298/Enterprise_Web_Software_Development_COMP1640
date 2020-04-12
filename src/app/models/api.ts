export class Api{
    nameApi: string;
    content: string;

}
//Staff
export const getStaff = {nameApi:'getStaffAPI', api:'http://localhost:8080/staffs',}

//Tutor
export const getTutor = {nameApi:'getStudentAPI', api:'http://localhost:8080/tutors',}
//Student
export const getStudent = {nameApi:'getStudentAPI', api:'http://localhost:8080/students',}

//Class
export const addClass = {nameApi:'addClassAPI', api:'http://localhost:8080/classes',}
export const getClass = {nameApi:'getClassAPI', api:'http://localhost:8080/classes',}

//Dashboard-staff
export const getNumberOfStudent = {nameApi:'getNumberOfStudentApi', api:'http://localhost:8080/students/total',}
export const getNumberOfTutorApi = {nameApi:'getNumberOfTutorApi', api:'http://localhost:8080/tutors/total',}
export const getNumberOfStudentNoTutorApi = {nameApi:'getNumberOfStudentNoTutorApi', api:'http://localhost:8080/students/total-undeclared',}
export const getStudentNonInteractionApi = {nameApi:'getStudentNonInteractionApi', api:'http://localhost:8080/students/no-interaction',}
//Login
export const getUser = {nameApi:'getUserAPI', api:'http://localhost:8080/login',}
