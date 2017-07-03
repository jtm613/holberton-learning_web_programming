let my_parameter = process.argv[2];
// Print the my_parameter variable
if( my_parameter >= 95)
console.log( my_parameter + " You received an A+");
else if(my_parameter >= 90)
{
  console.log(my_parameter + " YOu received an A")
}
else if(my_parameter >= 85)
{
  console.log(my_parameter + " YOu received an B+")
}
else if(my_parameter >= 80)
{
  console.log(my_parameter + " YOu received an B")
}
else if(my_parameter >= 75)
{
  console.log(my_parameter + " YOu received an C+")
}
else if(my_parameter >= 70)
{
  console.log(my_parameter + " YOu received an C")
}
else if(my_parameter <= 65)
{
  console.log(my_parameter + " YOu received an D")
}
