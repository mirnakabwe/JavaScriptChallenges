/* Make a JavaScript program to convert any number into hours and minutes.
(For example, 71 will become 1 hour, 11 minutes; 133 will become 2 hours, 13 minutes.)  */


function timeConverter()
{
    var num = document.getElementById("num").value;
    const constant = 60;
    var hours = Math.floor(num/constant);
    var minutes = num - (hours * constant);


    if(num < 0)
    {
        document.getElementById("answer").innerHTML = "Please enter a positive number!";
    } 
    else if(isNaN(num))
    {
        document.getElementById("answer").innerHTML = "Please enter a number!";
    }
     else 
    {
        document.getElementById("answer").innerHTML =  hours + " hours " + minutes + " minutes.";
    }

}

//timeConverter();






 
