import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
})
export class DataComponent implements OnInit {
  flightData:Flight[] = [
    {"Airline":"KLM","Ident":"KLM603","Aircraft":"B789","Status":"Scheduled (in 22 hours 2 minutes)","Departure":"Thu 12:55 CEST AMS","Arrival":"LAX 14:21 PDT Thu","Connection":"Nonstop"},
    {"Airline":"KLM","Ident":"KLM601","Aircraft":"B744","Status":"Scheduled (in 19 hours 7 minutes)","Departure":"Thu 10:00 CEST AMS","Arrival":"LAX 11:16 PDT Thu","Connection":"Nonstop"},
    {"Airline":"KLM","Ident":"KLM603","Aircraft":"B789","Status":"On The Way! / Delayed","Departure":"Wed 12:55 CEST AMS","Arrival":"LAX 15:10 PDT Wed","Connection":"Nonstop"},
    {"Airline":"KLM","Ident":"KLM601","Aircraft":"B772","Status":"On The Way! / On Time","Departure":"Wed 10:00 CEST AMS","Arrival":"LAX 11:22 PDT Wed","Connection":"Nonstop"},
    {"Airline":"Delta","Ident":"DAL79","Aircraft":"A333","Status":"Arrived / Gate Arrival","Departure":"Tue 15:13 CEST AMS","Arrival":"LAX 18:07 PDT Tue","Connection":"Nonstop"},
    {"Airline":"KLM","Ident":"KLM603","Aircraft":"B789","Status":"Arrived / Delayed","Departure":"Tue 12:45 CEST AMS","Arrival":"LAX 14:40 PDT Tue","Connection":"Nonstop"},
    {"Airline":"KLM","Ident":"KLM601","Aircraft":"B744","Status":"Arrived / Gate Arrival","Departure":"Tue 09:50 CEST AMS","Arrival":"LAX 11:45 PDT Tue","Connection":"Nonstop"}
  ]

  constructor() { }

  ngOnInit() {
  }
}

interface Flight {
  Airline:String,
  Ident:String,
  Aircraft:String,
  Status:String,
  Departure:String,
  Arrival:String,
  Connection:String
}

