// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");

// Get the <span> element that closes the modal
var span1 = document.getElementById('span1');
var span2 = document.getElementById('span2');
var span3 = document.getElementById('span3');
var span4 = document.getElementById('span4');
var span5 = document.getElementById('span5');
var span6 = document.getElementById('span6');
var span7 = document.getElementById('span7');
var span8 = document.getElementById('span8');
var span9 = document.getElementById('span9');
var span10 = document.getElementById('span10');

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
span7.onclick = function() {
  modal7.style.display = "none";
}
span8.onclick = function() {
  modal8.style.display = "none";
}
span9.onclick = function() {
  modal9.style.display = "none";
}
span10.onclick = function() {
  modal10.style.display = "none";
}

// pdf 1
var img1 = document.getElementById("myImg1");
var modalImg1 = document.getElementById("img01");

img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = "assets/Greensleeves1-3.jpg";
}
// pdf 2
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");

img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = "assets/Gymnopedie No.1-3.jpg";
}
// pdf 3
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");

img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = "assets/Bolero-03.jpg";
}
// pdf 4
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");

img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = "assets/Morning-2.jpg";
}
// pdf 5
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");

img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = "assets/O Mio Babino Caro-3.jpg";
}
// pdf 6
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");

img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = "assets/Delilah-2.jpg";
}
// pdf 7
var img7 = document.getElementById("myImg7");
var modalImg7 = document.getElementById("img07");

img7.onclick = function(){
  modal7.style.display = "block";
  modalImg7.src = "assets/Popular Tango-03.jpg";
}
// pdf 8
var img8 = document.getElementById("myImg8");
var modalImg8 = document.getElementById("img08");

img8.onclick = function(){
  modal8.style.display = "block";
  modalImg8.src = "assets/Hawaiian Wedding Song-05.jpg";
}
// pdf 9
var img9 = document.getElementById("myImg9");
var modalImg9 = document.getElementById("img09");

img9.onclick = function(){
  modal9.style.display = "block";
  modalImg9.src = "assets/Some Enchanted Evening-3.jpg";
}
// pdf 10
var img10 = document.getElementById("myImg10");
var modalImg10 = document.getElementById("img10");

img10.onclick = function(){
  modal10.style.display = "block";
  modalImg10.src = "assets/Spanish Eyes-3.jpg";
}