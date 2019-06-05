import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
})
export class FotosComponent implements OnInit {
  planeData:Plane[] = [
    {"Type":"Boeing 787-9 (twin-jet)","Cabin":"Business / Economy: Meal","Speed":563,"Altitude":9750,"Image":"https://photos-e1.flightcdn.com/photos/retriever/1ac7a6ebfd29126231b3b28eaea39badb9450587"},
    {"Type":"Boeing 747-400 (quad-jet)","Cabin":"Business / Economy: Meal","Speed":578,"Altitude":9150,"Image":"https://photos-e1.flightcdn.com/photos/retriever/a121caf4ab272b1dd05e3ed96c593b99b7409205"},
    {"Type":"Airbus A330-300 (twin-jet","Cabin":"Business","Speed":533,"Altitude":9750,"Image":"https://photos-e1.flightcdn.com/photos/retriever/ebef7fca2ba5282ef522cf3ac1e13f5e3a1bd45f"},
    {"Type":"Airbus A319 (twin-jet","Cabin":"Business","Speed":395,"Altitude":9150,"Image":"https://photos-e1.flightcdn.com/photos/retriever/b1bf58333870f1dd1cbe7110b4c8a18d669597c8"},
    {"Type":"Aerospool WT-9 Dynamic","Cabin":"Private","Speed":220,"Altitude":500,"Image":"https://cdn.jetphotos.com/400/6/47075_1522510557.jpg?v=0"},
    {"Type":"Boeing 747-200","Cabin":"millitary","Speed":895,"Altitude":10700,"Image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Air_Force_One_over_Mt._Rushmore.jpg/520px-Air_Force_One_over_Mt._Rushmore.jpg"}
  ]

  constructor() { }

  ngOnInit() {
  }

}


interface Plane {
  Type:String,
  Cabin:String,
  Speed:Number,
  Altitude:Number,
  Image:String
}
