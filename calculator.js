function Addition(num1,num2){
    return num1 + num2;
}
 
function Subtraction(){
    return a -b;
}
 
function Multiplication(){
    return a *b;
}


var skyIsBlue = true;

while(skyIsBlue)
{

    var a = 0;
    var b = 0;
    
    
    
    var choice = window.prompt(" 1. Addition\n 2. Subtraction\n 3. Multiplication \nenter choice");
    
    while(choice>4 || choice <1)
    {
        console.log("enter valid option: ")
    }
    
    if(choice =="1")
    {

        a = window.prompt("enter first: ");       
        b = window.prompt("enter second: ");
       
           var num1 = parseInt(a);
           var num2 = parseInt(b);
       
           alert(Addition(num1,num2))
        }else if(choice == "2")
        {

            a = window.prompt("enter first: ");       
            b = window.prompt("enter second: ");
           
               var num1 = parseInt(a);
               var num2 = parseInt(b);
           
               alert(Subtraction(num1,num2))
               
            }else if(choice == "3")
            {

                a = window.prompt("enter first: ");       
                b = window.prompt("enter second: ");
               
                   var num1 = parseInt(a);
                   var num2 = parseInt(b);
               
                   alert(Multiplication(num1,num2))
            }
           var continu = window.prompt("continue playing");
           if(continu != 'y')
           {
             skyIsBlue = false;
           }
}