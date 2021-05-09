 /*confirm ('welcome to our website take a tour..')
 var workType=prompt('what type of civil work do want to choose structure or finishing?');

if(workType=='finishing'){
  document.write('<img src="https://archello.s3.eu-central-1.amazonaws.com/images/2019/01/07/Interior-Design-of-Luxury-Modern-Residence-6.1546900319.0638.jpg" width="250px">');
}else if(workType == 'structure'){
  document.write('<img src="https://qph.fs.quoracdn.net/main-qimg-c01b0e3c77d64bc83b5ab1d2d6e97b3a.webp" width="250px">');
}else{
  document.write('<h3> please only write structure or finishing next time</h3>');
}


var color=prompt('whats your fav color?');

  document.body.style.backgroundColor = color 
<<<<<<< HEAD
*/
function printFavourite() {
  var favouriteBuilding = prompt('what is your favourite building in the arab world?');

while (favouriteBuilding !== 'khalifa tower' && favouriteBuilding !== 'the arab tower') {
  favouriteBuilding = prompt('please only answer with khalifa tower or the arab tower');} 

var result ='' ;
if(favouriteBuilding=='khalifa tower') {result='<img src="https://luxeadventuretraveler.com/wp-content/uploads/2012/12/Luxe-Adventure-Traveler-Dubai-Burj-Khalifa-6.jpg" width=300 px>'}
if (favouriteBuilding=='the arab tower') {result='<img src="https://previews.123rf.com/images/jonathankitchen/jonathankitchen1812/jonathankitchen181200013/115890655-burj-al-arab-tower-of-the-arabs-is-a-luxury-hotel-located-in-dubai-united-arab-emirates-it-stands-on.jpg" width=250 px>'
}
return result }

document.write(printFavourite())
  
/*var stars = prompt('how many starts do you rate our website?');

if (stars > 5) {
  stars = 5;
}

for (var i = 0; i < stars; i++) {

  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">'); } */
  var getRating=function(){

var stars = prompt('how many starts do you rate our website?');

if (stars > 5) {
  stars = 5;
}
var starResults='';

for (var i = 0; i < stars; i++) {
 
  starResults += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvvIxXy4-x8TSIlWn-znOZirHvrsErjpxQw&usqp=CAU" width="50px">';
}

return starResults;
}

document.write(getRating());