var min=25;
var sec=00;
var time=document.getElementById("time");
var stbtn=document.getElementById("start");
var timeout;
function init()
{
min=25;
sec=0;
timeout=setInterval(updatetime,1000);
stbtn.disabled=true;
}
function updatetime()
{
sec--;
if(sec==-1)
{
sec=59;
min--;
}

update(min,sec);

}
function update(m,s)
{
if(min==0&&sec==0)
{
  min=25;
  sec=0;
  clearTimeout(timeout);
time.innerHTML="TIMEOUT";
stbtn.disabled=false;
return;
}
if(m<10)
m="0"+m;
if(sec<10)
s="0"+s;
time.innerHTML=m+" : "+s;

}
function reset()
{

clearTimeout(timeout);
min=25;
sec=0;
time.innerHTML=min+" : "+"00";
stbtn.disabled=false;
}
