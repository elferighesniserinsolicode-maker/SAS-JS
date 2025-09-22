let number1= prompt("entrer premier number");
let operation=prompt("entrer votre operation");
let number2=prompt("entrer deuxieme number");

switch(operation)
{
    case "+":
        alert (+number1 + +number2);
        break;
    case "-":
        alert (number1 - number2);
        break;
    case "":
        alert (number1* number2);
        break;
    case "/":
        if(number2!=0)
        {
            alert (number1 / number2);
        }
        else
        {
            alert ("Division par zéro interdite !");
        }
        break;
    default:
        alert("error");
}