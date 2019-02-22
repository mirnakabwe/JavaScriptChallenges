/*Make a JavaScript program that returns the area of a triangle
 where the lengths of its three sides are 7, 8, 9. */

 function areaOfTriangle()
 {

    var s1 = 7;
    var s2 = 8;
    var s3 = 9;
    var sum = (s1 + s2 + s3);
    var s = 0.5 * (s1 + s2 + s3);
    
    var area = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3)).toFixed(2);

    //console.log("Area: " + area);

    document.getElementById("answer").innerHTML = "The area of lengths 7, 8 and 9 is : " + area;


  

 }

areaOfTriangle();
