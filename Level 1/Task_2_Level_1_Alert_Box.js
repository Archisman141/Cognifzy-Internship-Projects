const currentDate=new Date();
const currentHour=currentDate.getHours();

let greetingmessage;
if(currentHour<12){
    greetingmessage="Good Morning!";
}
else if(currentHour<18){
    greetingmessage="Good Afternoon!";
}
else{
    greetingmessage="Good Evening";
}
alert(greetingmessage);