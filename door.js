// JavaScript Document
'use strict';
var value2=require('./appGam.js');
module.exports = class Door {
   constructor(firstRoom, lastRoom,plyr) {//имя комнат ключ плеера
       this.typ = "door";
	   this.firstRoom=firstRoom;
	   this.lastRoom=lastRoom;
       this.plyr=plyr;
   }

   display() {
       console.log("дверь из");
	   return ["use","display"];
   };
   use(firstRoom, lastRoom,plyr){
   console.log(value2.value2);//
   delete value2.value2[this.firstRoom][this.plyr];
   value2.value2[this.lastRoom][plyr]=plyr;
   return [value2.value2,this.lastRoom];
   console.log(value2.value2[this.lastRoom]);
   };
}