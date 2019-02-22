

 /* Make a JavaScript program that returns the largest of three numbers. 
 Bonus points: allow the user to provide 3 numbers and your program will return the largest of the three.  */


 function largestNumber()
 {
 
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;



    if(isNaN(num1) || num1 === "")
    {
       // console.log("Only Numbers are allowed!");
       document.getElementById("largest").innerHTML = "Only Numbers allowed!!!";
    }

    else if (isNaN(num2) || num2 === "")
    {
       // console.log("Only Numbers are allowed!, please enter a number.");
       document.getElementById("largest").innerHTML = "Only Numbers allowed!!!";
    }

    else  if(isNaN(num3) || num3 === "")
    {
       // console.log("Only Numbers are allowed!, please enter a number.");
       document.getElementById("largest").innerHTML = "Only Numbers allowed!!!";
    }

  else if(num1 > num2 && num1> num3)
   {
       //console.log("Largest number: " + num1);
       document.getElementById("largest").innerHTML = "Largest Number: " + num1;
   } 
    else if(num2 > num1 && num2 > num3)
   {
   // console.log("Largest number: " + num2);
   document.getElementById("largest").innerHTML = "Largest Number: " + num2 ;
   }
   else if(num3 > num1 && num3 > num2)
   {
   // console.log("Largest number: " + num3);
   document.getElementById("largest").innerHTML = "Largest Number: " + num3;
   }
 

 }
