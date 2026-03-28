<!-- Begin
var Message="WWW.GENERO.GRAPHICS                          ";
var place=1;
function scrollIn() {
window.status=Message.substring(0, place);
if (place >= Message.length) {
place=1;
window.setTimeout("scrollOut()",1);}
else {place++;window.setTimeout("scrollIn()",12);}}
function scrollOut() { 
window.status=Message.substring(place, Message.length);
if (place >= Message.length) {
place=1;
window.setTimeout("scrollIn()", 50);
} else {
place++;
window.setTimeout("scrollOut()", 50);
}
}
// End -->
scrollOut();
