 confirm ('welcome to our website take a tour..')
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
  