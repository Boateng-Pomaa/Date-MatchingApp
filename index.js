var Group_A = ["Emmanuel", "Osei", "Owusu","Opoku","Agyeman"];
 var Group_B = ["Pat", "Linda", "Erica","Adwoa","Ama"];
 var places = ["Golden Bean","Mandys","Eusbett","City Aroma","Golden Tulip"];

var first_person = Group_A[Math.floor(Math.random()*Group_A.length)];


 var second_person = Group_B[Math.floor(Math.random()*Group_B.length)];

var dinner_place = places[Math.floor(Math.random()*places.length)];
 
console.log('Group  A ['+first_person+'] and Group B['+second_person+'] will be going on a dinner date at ['+dinner_place+']');