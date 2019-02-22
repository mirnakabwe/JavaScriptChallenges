
/*Make a JavaScript program that checks two numbers and returns true if one of the numbers is 65 or if their sum is 65. */

function checkNum()
{
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var sum = parseInt(n1) + parseInt(n2);
    var number = 65;


    if(sum === 65 && (!isNaN(sum)))
    {
        document.getElementById("Input").innerHTML = "True";
    } 
    else if(n1 === 65 || n2 === 65)
    {
        document.getElementById("Input").innerHTML = "True";
    }
    else
    {
        document.getElementById("Input").innerHTML = "false";
    } 


  
}