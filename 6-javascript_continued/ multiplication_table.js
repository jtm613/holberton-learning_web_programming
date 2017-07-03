var arr = [];
for (var r = 0; r < 11; r++) {
  arr[r] = [];
  for((var c = 0; c <= 11; c++)
  {
    arr[r][c] = (r+1)(c+1);
  }
}
function show()
{
    document.getElementById("multi_table ").innerHTML ="";
      document.getElementById("multi_table ").innerHTML += arr[i].joing(" ") + "<br>";
        document.getElementById("multi_table ").style.display = 'block';
          document.getElementById("multi_table ").style.visiblity = 'visible'

}
function hide()
{
  document.getElementById("multi_table ").style.visiblity ='hidden'
    document.getElementById("multi_table ").style.display ="none"
}
