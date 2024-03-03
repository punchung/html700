//Steing ,numer boolean ,array ,object
//1.String
//let firstname = 'John'; //ชื่อตัวแปร letประกาศได้ตัวเดียว แต่สามรถอัปเดตค่าได้
//const idcard = '1234567890123'; //ค่าไอดีการ์ดคือ เป็นstring ม่สามารถเปลี่ยนแปลงค่าได้ อัปเดตค่าไม่ได้
//console.log("My name is : " , firstname);

//prompt("Enter your name"); //รับค่าจากผู้ใช้

//2.number
//let number = 20;
//let height = 170.5;

//3.boolean true/false
//let isHandsome = true;



//firstname = 'Tom';

//console.log("My name is : " , firstname);


//-------------------------------------------//
/* +บวก -ลบ *คูณ /หาร %หารเอาเศษ 
let num1 = "test";
let num2 = 10;
let result = num1 + num2; สามารถใช้กับstringได้
let result2 = num1 - num2; // 5-10 = -5
let result3 = num1 * num2; // 5*10 = 50
let result4 = num1 / num2; // 5/10 = 0.5
let result5 = num1 % num2; // 5%10 = 5
let result6 = num1 + num2; 
console.log("Result is",result6);*/

//-------------------------------------------//
/* การเปรียบเทียบค่า  ==เท่ากับ  !=ไม่เท่ากับ  >มากกว่า  >=มากกว่าเท่ากับ <น้อยกว่า  <=น้อยกว่าเท่ากับ */
//let num1 = 10;
//let num2 = 18;
//let codition = num1 >= num2; //จะเก็บค่าเป็นtrue/false
//console.log("Num is",codition);

//-------------------------------------------//
//if - else condition
/*let num1 = 5;
let num2 = 5;

if(num1 != num2){  //false
    console.log('Yes');
}
else if(num1 == num2){ //true
    console.log('this is elseif');

}
else{ //false
    console.log("this is elseif");
}
*/

/*grade 80-100 = A
grade 70-79 = B
grade 60-69 = C
grade 50-59 = D
grade 0-49 = F
*/

/*let score = prompt("Enter your score"); //รับค่าจากผู้ใช้
console.log("Your score is",score);

if (score >=80){
    console.log("You are A");
}
else if(score >=70){
    console.log("You are B");
}
else if(score >=60){
    console.log("You are C");
}
else if(score >=50){
    console.log("You are D");
}
else{
    console.log("You are F");
}
*/

//-------------------------------------------//
/* && และ ทุกเงื่อนไขต้องเป็นจริงทั้งหมด
|| หรือ อย่างน้อย 1 เงื่อนไขเป็นจริง
! ไม่เท่ากับ */
/*let number1 = 5;
let number2 = 8;

let condition = number1 >=3 && number2 >= 5; 
console.log("Result of condition",condition);

let age = 30;
let gender = "male";

if (age >= 20 && gender == "male"){
    console.log("You are male");
} 

let number = 20;
if (!(number % 2 == 0)){
    console.log("You are even number");
}*/

//-------------------------------------------//
/*loop วนซ้ำ  
while วนซ้ำจนกว่าเงื่อนไขจะเป็นเท็จ
for วนซ้ำจนกว่าจะครบเงื่อนไข 
let counter = 0;

while(counter < 10){
    console.log("Hello word");
    counter = counter + 1;
}

for(let counter = 0; counter < 10;counter++){
    console.log("Hello word");
}*/

//-------------------------------------------//
/*array คือ ตัวแปรที่สามารถเก็บข้อมูลได้หลายๆค่า*/
/*แทนที่ค่าใน array
ages = [45,50]
console.log(ages);

เพิ่มค่าใน array
ages.push(55);
console.log(ages);

/ลบค่าใน array
ages.pop();
console.log(ages); 

let ages = [35,14,20];

/*if (ages.includes(40)){ //เช็คว่ามีค่า40อยู่ในarrayไหม
    console.log("you have 40");
}

console.log(ages); 
ages.sort(); //เรียงค่าจากน้อยไปมาก
console.log(ages); 

let name_list = ["John","Mark","Mike"];
name_list.push("Carol");
console.log(name_list);
console.log(name_list.length); //นับจำนวนข้อมูลในarray
console.log(name_list[0]); 
console.log(name_list[1]);
console.log(name_list[2]);
console.log(name_list[3]);

for(let index = 0; index < name_list.length; index++){
    console.log("Name list",name_list[index]);
} //วนลูปเพื่อแสดงข้อมูลในarray ทีละตัว

*/

//-------------------------------------------//
/*object คือ ตัวแปรที่สามารถเก็บข้อมูลได้หลายๆค่า และมีค่าเป็นชื่อได้

let student = [{
    age : 30, name : "mairo" , grade : 4.5} 
,student2 = {
    age : 25, name : "mark" , grade : 4.5}]

student.push({age : 24, name : "Haechan" , grade : 4.5}); //เพิ่มข้อมูลในobject

for(let index=0; index < student.length; index++){
    console.log("Student Name",(index+1));
    console.log("Name",student[index].name);
    console.log("Age",student[index].age);
    console.log("Grade",student[index].grade);
}
*/

//-------------------------------------------//
/*function คือ กลุ่มของคำสั่งที่มีหน้าที่ในการทำงานบางอย่าง
//การประกาศ function

let score1 = 50
let score2 = 60

//ประกาศ function ,arrow function
function calculation_grade (score) { //function
    if (score >=80){
        grade = "A";
    }else if(score >=70){
        grade = "B";
    }else if(score >=60){
        grade = "C";
    }else if(score >=50){
        grade = "D";
    }else{
        grade = "F";
    }
    return grade;
}
*/
/*let calculation_grade = (score) => { //arrow function
    if (score >=80){
        grade = "A";
    }else if(score >=70){
        grade = "B";
    }else if(score >=60){
        grade = "C";
    }else if(score >=50){
        grade = "D";
    }else{
        grade = "F";
    }
    return grade;
}

//การเรียกใช้ function

let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('score1 = '+ grade1)
console.log('score2 = '+ grade2) 


//-------------------------------------------//
//array



for (let index = 0; index<score.length ;index++){ //วนลูปเพื่อแสดงข้อมูลในarray
    console.log("Score :" ,score[index]);
}

let score = [10 ,20 ,30 ,40];
score.forEach((s) => {
console.log("Score :" ,s)
})


//map,filter

//score[0] =score[0]*2
//score[1] =score[1]*2
//score[2] =score[2]*2
//score[3] =score[3]*2


score = score.map((s) => {
    return s*2
})

score.forEach((s) => { //การวนloopในarray
    console.log("New Score :" ,s)
    })
*/

//map คือ การแปลงข้อมูลใน array

//ใช้filter คือ การกรองข้อมูล
/*let score = [10 ,20 ,30 ,40];

for (let index =0; index<score.length ;index++){
    console.log("Score :" ,score[index]);
    //if(score[index] >= 30){
        //newScore.push(score[index])
    //}   
}
let newScore = score.filter((s) => {
    //if (s >= 30){
        //return true
    //} else {
        //return false
    //}
    return s >= 30 
})

newScore.forEach((ns) => {
    console.log("New Score :" ,ns)
    })

console.log("newscore:" ,newScore);
*/

//-------------------------------------------//
//object คือ ตัวแปรที่สามารถเก็บข้อมูลได้หลายๆค่า และมีค่าเป็นชื่อได้
//find คือ การหาข้อมูลใน object

let stu = [
    {name : 'Aa',score : 90,grade : 'A'}
    ,{name : 'Bb',score : 80,grade : 'B'}
    ,{name : 'Cc',score : 70,grade : 'C'}
]

//find คือ การหาข้อมูลใน object
let stu3 = stu.find((s) => {
    if(s.name == 'Bb') {
        return true
    }
});

let heightscore_student = stu.filter((s) => {
    if(s.score >= 80){
        return true
    }
});

console.log("Student" ,stu3)
console.log("Student" ,heightscore_student)  