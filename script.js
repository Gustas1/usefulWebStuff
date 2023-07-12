// WRITE FUNCTION
function write(id, text, k, sp) {
  if (k < text.length) {
    document.getElementById(id).innerHTML += text.charAt(k);
    k++;
    setTimeout(write, sp, id, text, k, sp);
  }
}
// write function takes in 4 parameters, id, text, k and sp
// id is the html/css id of the place you want to write
// text is the text you want to write
// k is needed to reset the number so it can be compared to the length
// sp is the speed at you want to text to be written

