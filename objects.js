
var cars = { name: 'Biltmore',
 rooms: 600,
 roomsBooked: 150,
 
 roomService: 'Yes',
 pool: 'Yes',
 gym: 'Yes',
 businessOffice: 'Yes'
};

 hotel.roomsAvail = function(){
       return this.rooms - this.roomsBooked;  
 };
 
 var getInfo = function(){
   document.getElementById("hotelname").innerHTML = hotel.name;
   document.getElementById("rooms").innerHTML = hotel.rooms;
   document.getElementById("roomsavail").innerHTML = hotel.roomsAvail();
 }