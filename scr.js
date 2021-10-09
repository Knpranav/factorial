function factorial()
{
  var n ,i=0
  var fact=1
  n=document.getElementById('in').value
  for(i=1;i<=n;i++)
    {
      fact=fact*i
    }
  
  document.getElementById('output').innerHTML=fact
  document.getElementById('in').value=''
  document.getElementById('button').style.backgroundColor='#rgb(0, 49, 0);'
 
}