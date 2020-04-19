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
export const getNumberOfTutor = {nameApi:'getNumberOfTutorApi', api:'http://localhost:8080/tutors/total',}
export const getNumberOfMess = {nameApi:'getNumberOfMessApi', api:'http://localhost:8080/messages/7day',}


export const getNumberOfStudentNoTutor = {nameApi:'getNumberOfStudentNoTutorApi', api:'http://localhost:8080/students/total-undeclared',}
export const getStudentNonInteraction = {nameApi:'getStudentNonInteractionApi', api:'http://localhost:8080/students/no-interaction',}

export const getStudentUndeclared = {nameApi: 'getStudentUndeclaredApi', api: 'http://localhost:8080/students/undeclared',}

//Login
export const getUser = {nameApi:'getUserAPI', api:'http://localhost:8080/login',}

//message
export const getMessage = {nameApi: 'getMessageApi', api:'http://localhost:8080/messages',}
