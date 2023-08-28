// //   global.user={
// //     name:"deepak",
// //     age:21,
// //     sex:"male"
// // }
// // func=(...args)=>{
// //      sum=0;
// //    args.forEach(args => {
// //     sum+=args;
// //    });
// //     return sum

// // }
// // arr=[1,2,15]
// // tot=func(2,3,4,5,6)
// // arr.forEach((index,number,arrName)=>{
// //     console.log(index,number,arrName);
// // })
// // arr.forEach((number,index)=>{

// //     console.log(arr.indexOf(number))
// // })
// // let search=require('Name')
// // console.log(arr[0])
// // var names='k a m a l i'
// // newArr=names.split(' ')
// // let index=arr.length;
// // for(let i=0;i<newArr.length;i++){
// //     arr[index++]=newArr[i];
// // }
// // // console.log(arr.pop())
// // let sum=0;
// // console.log(arr.map((item,index,arr)=>item.length))
// // function compare(a,b){
// //     if(a>b) return 1
// //     if(a==b) return 0
// //     if(a<b) return -1;     
// // }
// // arr.sort(compare)
// // arr.forEach(item=>{
// //     console.log(item)
// // })
// // console.log("Enter the number");
// // const readline = require("readline-sync");
// // let a = Number(readline.question());
// // var flag = false

// // var count = 0
// // for (let j = 2; j < a / 2; j++) {
// //     if (a % j == 0) {
// //         count++;
// //     }
// // }
// // if (count >= 1) {
// //     flag = true

// // }
// // if (flag == true) {
// //     console.log(`${a} is a non-prime number`)
// // }
// // else {
// //     console.log(a+" is a prime number")
// // }
// // var sum=+"5" + +"3"
// // console.log(typeof(sum))
// // let user={
// //     name:"Deepak",
// //     age:21,
// //     gender:"male"
// // }
// // let clone=user;
// // clone.name="fayeza"
// // console.log(user.name);
// // let newClone={};
// // for(let key in user){
// //     newClone[key]=user[key];
// // }
// // newClone["name"]="deepak"
// // console.log(user.name+" "+newClone.name);
// // function User(name){
// //     this.name=name;
// // }
// // var name=String(readline.question())
// // var user=new User(name);
// // console.log(JSON.parse(user))
// // class Deepak{
// //     constructor(sms){
// //         this.sms=sms;
// //         console.log(this.sms);
// //     }
// // }
// //         throw new Deepak("hello");
    
// //   let user=`{"name":"Deepak","age":21}`
// //   console.log(JSON.parse(user));
// //   let promise =new Promise(function(resolve,reject){
// //     // setTimeout(()=>resolve("done!"),1000);
// //     throw new Error("Fuck you!");
// //     // setTimeout(()=>reject(new Error("Punda!")),1000);
// //   });
// //   promise.finally(()=> console.log("done"))
// //   .catch(
// //     // result=>console.log(result),
// //     error=>console.log(error.message)
// //   )
// //   async function fun(){
// //     return "Hello"
// //   }
// //   fun().then(
// //     function(value){console.log(value)},
// //     function(error){console.log(error)}
// //   )
// //   let promise=new Promise(function (resolve,reject){
// //      reject("Deii Kathaatha da!")
// //   })
// //   .then(
// //     result=>console.log(result),
// //     error=>console.log(error.message)
// //   )
// //   class Car{
// //     constructor(name){
// //       this.car=name;
// //     }
// //     static car(){
// //       console.log("Suzuki");
// //     }
// //   }
// //   const name=new Car("Ford");
// //   console.log(name.car);
// //   Car.car();
// // setInterval(()=>console.log(user.name),2000)
// // fetch('https://api-thirukkural.vercel.app/api?num=1').then((res)=>res.json()).then((msg)=>{console.log(msg.line1),console.log(msg.line2)})
// // fetch('https://api-thirukkural.vercel.app/api?num=1')
// // .then((res)=>res.json())
// // .then((msg)=>{console.log(msg.line1),console.log(msg.line2)})
// // .catch((err)=>console.log(err))
// // fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime').
// // then((res)=>res.json()).then((msg)=>console.log(msg))
// // .catch((err)=>console.log(err));
// // Node mailer
// var nodemailer=require('nodemailer');
// var transporter=nodemailer.createTransport({
//   service:'gmail',
  
//   auth:{
//     user:'fayedeepak21@gmail.com',
//     pass:'gjgdzcstcbaqsphb'
//   }
// });
// var mailOptons={
//     from:'fayedeepak21@gmail.com',
//     to:'rajadeepak1989@gmail.com',
//     subject:'Booking Confirmation',
//     text:'Your cab is booked successfully!,thank you for choosing us!'
// }
// transporter.sendMail(mailOptons,function(error,info){
//   if(error){
//     console.log(error)
//   }
//   else{
//     console.log('Email sent: '+info.response);
//   }
// })


// var http = require('http')
// var fs=require('fs')
// var path=require('path')
// var port=3000
// var hostname='Deepak'
// http.createServer(function(req,res){
//   res.writeHead(200,'Content-type','text/html')
//   res.write('<button type="submit">send</button>')
//   res.end();
//     })
// .listen(port,hostname,()=>{
//   console.log(`Server is running at ${hostname}`);
// });
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 3000;
   


app.use(express.static('BK-travels-main'));
app.use(express.json())

// app.use("/public",express.static(path.join(__dirname,'public')));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Serve the HTML form
app.get("/", (req, res) => {
    res.sendFile( 'BK-travels-main/index.html');
});

app.post('/',(req,res)=>{
console.log(req.body);
const transporter = nodemailer.createTransport({
  service:'gmail', // e.g., 'Gmail'
    auth: {
        user: "bktravels759@gmail.com",
        pass: "wocitadohygqzdqo"
    }
});

const mailOptions = {
    from: "bktravels759@gmail.com",
    to: req.body.to,
    subject: "Booking Confirmation",
    text: `Dear ${req.body.name},We are excited to inform you that your recent  booking on BK-travels ${req.body.service} at ${req.body.time} has been successfully processed and confirmed.Thank you for choosing us.`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error sending email:", error);
        
    } else {
        console.log("Email sent:", info.response);
        // res.status(200).json({ message: "Email sent successfully" });
    }
});









})
// Define the endpoint for sending emails
// app.post("/send-email", (req, res) => {
//     const { to, subject, message } = req.body;




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

