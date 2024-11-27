"use strict"


//palindrome


// function palindrome(){
// let input = prompt("enter the word").toLowerCase();
// let str = input.split("").reverse().join("");
// if(input==str){

//     console.log("the given word "+input+" is palindrome");
// }
// else{

//     console.log("the given word "+input+" is not palindrome");
// }
// }
// palindrome();



//Sum of all even numbers

// let array = [2,4,61,3,5];
// let sum = even(array);
// function even(input){
//     let num = 0;
//     for(let i=0;i<input.length;i++){
//         if(input[i]%2==0){
//             num += input[i];
//             console.log("the even numbers are " + input[i]);
//         }
//     }
//     return num;    
// }
// console.log(sum);


// sort 

// function sorting() {
//   let myarr = [42, "apple", 17, "banana", 2];
//   myarr.sort();
//   console.log(myarr);
//   console.log(myarr.join(","));
// }
// sorting();




//to find the prime number which is divible by one 

// function prime(a){
//     let value = 0;
//     for(let i=2;i<a;i++){
//         let input = true;
//         for(let j =2;j<i;j++){
//             if(i%j===0){
//                 input = false;
//                 break;
//             }
//         }
//         if(input){
//             value++;
//         }
//     }
//     return value;
// }
// let primenumber = prompt("enter number to find how many prime numbers"); 
// let output = prime(Number(primenumber));
// console.log("the count of prime number is "+output);



const studentmarksheet = {
    studentdetails : [],
    storebook : [],
    college : function(name,mark,options,subject,id,updates){
        options = prompt("Main Menu \n Choose an action:\n 1. Add student \n 2. display student \n 3. update student \n 4.delete student");
        if(options == 1){
            name = prompt("Enter the student's name:");
            id = Math.floor(Math.random()*10000);
            mark = prompt("Enter student's mark:");
            mark = mark.split(",");
            // mark = (mark);
            subject = prompt("Enter subject :");
            subject = subject.split(",");
            console.log(name,id,mark,subject);
            while(mark.length!=subject.length){
                alert("Marks and subjects length mismatch.");
                mark = prompt("Enter student's mark:");
                subject = prompt("Enter subject :");
            }
            this.studentdetails.push({name,mark,subject,id});
            this.college();
        } 
        else if(options == 2)
            {
            for(let i=0;i<this.studentdetails.length;i++){
            
               console.log("Name: "+this.studentdetails[i].name+" \nmark: "+this.studentdetails[i].mark+" \nsubject: "+this.studentdetails[i].subject+"\nId : "+this.studentdetails[i].id);
            }
            this.college()
            }
        else if(options == 3)
        {
          let enterid = Number(prompt("Enter the Id number"));
           let newmark = prompt("Enter the student's new mark:");
           newmark = newmark.split(",");
           let newsubject = prompt("Enter subject :");
            newsubject = newsubject.split(",");
            console.log(newmark,newsubject);
            while(newmark.length!=newsubject.length){
                alert("Marks and subjects length mismatch..");
                newmark = prompt("Enter student's mark:");
                newsubject = prompt("Enter subject :");
            }
            for(let i = 0;i<this.studentdetails.length;i++){
                if(this.studentdetails[i].id == enterid){
                    this.studentdetails[i].mark = newmark;
                    this.studentdetails[i].subject = newsubject;
                }
            }
            console.log(" Student with ID "+enterid+ "updated successfully!");
            this.college();
        }
        else if(options == 4){
            let stuid = Number(prompt("Enter the Id number"));
            for(let i=0;i<this.studentdetails.length;i++){
                if(this.studentdetails[i].id === stuid){
                   this.studentdetails.splice(i,1)
                    console.log("Student with ID "+stuid+" is deleted successfully!");
                }      
        }
        return  "Student with ID nonExistentID not found.";
    }
}
}
studentmarksheet.college();



 