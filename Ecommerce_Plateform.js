let paymentMethod = "debit";
let fee;
switch (paymentMethod)
{
    case "credit":
        fee = 2; console.log("proce fee " + fee +" associated with payment method" + "credit");
        break;
    case "debit":
        fee = 1.5; console.log("process fee " + fee + " associated with payment method " + "debit");
        break;
    case "paypal":
        fee = 3; console.log("process fee " + fee + " associated with payment method " + "paypal");
        break;
    default: console.log("not have more payment method, sorry enter credit,debit or paypal method");
}