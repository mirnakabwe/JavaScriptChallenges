
/* Make a JavaScript program that takes two strings as input, and outputs the
 common characters/letters that they share. 
(For example, Input: �house�, �computers� .. Output: �Common letters: o, u, e, s�) */


function commonCharacters()
{
    var s1 = document.getElementById("word1").value;
    var s2 = document.getElementById("word2").value;


     string1 = [...s1] //Destructuring
     string2 = [...s2] //Destructuring
 
    
    for(let i = 0; i < string1.length ;i++)
    {
        for(let j=0; j< string2.length;j++)
        {
                if(string1[i] === string2[j])    
                {
                    document.getElementById("same").innerHTML = "There are common characters - look at the console" ;

                    console.log(string1[i]);   
                } 
                
                else 
                {
                    document.getElementById("same").innerHTML = "There are no common characters.";
                }
        }

        

    }   
    
}                   
    
//commonCharacters('',''); 


