export function changeContent(el) {
  // lista=Array.prototype.slice.call(document.querySelectorAll('section.network-slice .aside .components ul li div'))

  var display = document.getElementById(el).style.display;
  if (display === "none" || display === ""){
    document.getElementById(el).style.display = 'block';
    // document.getElementById(lista.forEach(`${(i)=>console.log(i.id)}`)).style.display = 'none';
  }
  else{
    document.getElementById(el).style.display = 'none';
}}