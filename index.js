var x =document.getElementsByClassName("btn");
var display = document.getElementById("tr11");

for(var i=0;i<x.length;i++)
{
  x[i].addEventListener('click',function()
  {
      var z = this.getAttribute("value");
      if(z == "=")
      {
        var c = eval(display.innerHTML);
        display.innerHTML = c;
      }
      else if(z == "ac")
      {
        display.innerHTML="";
      }
      else if(z == "sign")
      {
        var cb =   display.innerHTML;
        display.innerHTML = eval(-1*cb);
      }
    else{
      display.innerHTML =   display.innerHTML + z;
      }
  });
}
