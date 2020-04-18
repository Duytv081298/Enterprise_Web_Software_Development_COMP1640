export class Schedule {personId:string;
    calendarDtoList?: Calender[] 
}
export class Calender {date: string;

slot1: boolean;
slot2: boolean;
slot3: boolean;
slot4: boolean;
slot5: boolean;
slot6: boolean;
slot7: boolean;
slot8: boolean;

}
export class Slot{
    timeout:string;
    day1: boolean;
    day2: boolean;
    day3: boolean;
    day4: boolean;
    day5: boolean;
    day6: boolean;
    day7: boolean;
}