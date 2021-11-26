const { request, response } = require('express');
const express = require('express');
var cors = require('cors')
const httpApp = express();
const bodyParser = require("body-parser");
httpApp.use(bodyParser.json());
//require for our db module 

var corsOptions = {
    origin: 'http://localhost:4200'
  }
  httpApp.use(cors({
    origin: '*',
    credentials: true
  }));//call db module from db.js file

//require for our db module 
const db = require('./db');

httpApp.listen(3000,()=>{
    console.log('start')
})
//get end point - Ghaida'a

httpApp.get('/requests', async (request, response) => {
    //return reaquests to the client
    let [result, rows] = await db.connection.execute("SELECT * FROM request")
    response.status(200).json(result)
})

httpApp.get('/admins', async (request, response) => {
    //return requests to the client
    let [result, rows] = await db.connection.execute("SELECT * FROM admin")
    response.status(200).json(result)
})
httpApp.get('/students', async (request, response) => {
    //return list of student to the client
    let [result, rows] = await db.connection.execute("SELECT * FROM student")
    response.status(200).json(result)
})
httpApp.get('/response', async (request, response) => {
    //return responses to the client
    let [result, rows] = await db.connection.execute("SELECT * FROM response")
    response.status(200).json(result)
})
httpApp.get('/courses', async (request, response) => {
    //return responses to the client
    let [result, rows] = await db.connection.execute("SELECT * FROM course")
    response.status(200).json(result)
})


//adding - Isra'a

/*httpApp.post('/Admins', async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into admin (Admin_ID,Admin_Name ) values (?,?)", [request.body.Admin_ID, request.body.Admin_Name])
    response.status(201).json(result);

});
httpApp.post('/students', async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into student (Student_ID ,Student_Name ,University_Major ) values (?,?,?)", [request.body.Student_ID,request.body.Student_Name,request.body.University_Major])
    response.status(201).json(result);

});*/
//lAST UPDATE ON POST FOR REQUEST 
httpApp.post('/requests', async (request, response) => {
    console.log(request.body.Course_Number);
    console.log(request.body.Section_Number);
    console.log(request.body.Reaquest_status);
    console.log(request.body.Student_Student_ID);
    console.log(request.body.Admin_Admin_ID);
    console.log(request.body.Course_Name);
    await db.connection.execute("insert into request (Course_Number, Section_Number,Course_Name, Student_Student_ID, Admin_Admin_ID ,Reaquest_status) values (?,?,?,?,?,?)",
     [request.body.Course_Number, request.body.Section_Number, request.body.Course_Name, request.body.Student_Student_ID, request.body.Admin_Admin_ID , request.body.Reaquest_status])
    response.status(200).json("request");
})


httpApp.post('/students/add', async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into student (Student_ID ,Student_Name ,University_Major ) values (?,?,?)", [request.body.Student_ID,request.body.Student_Name,request.body.University_Major])
    //response.send("worked");
    response.status(201).json(result);

});
httpApp.post('/admins/add', async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into admin (Admin_ID,Admin_Name) values (?,?)", [request.body.Admin_ID, request.body.Admin_Name])
    response.status(201).json(result);

});

httpApp.post('/courses/add', async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into course (Course_Number,Course_Name,PlayList) values (?,?,?)", [request.body.Course_Number, request.body.Course_Name,request.body.PlayList])
    response.status(201).json(result);

});


//delete end point - Abed
httpApp.delete('/requests/delete', async (req, res) => {
    let [result, rows] =  await db.connection.execute("DELETE FROM request");
    res.send("DELETE Request Called");
});

  httpApp.delete('/response/delete', async (req, res) => {
    let [result, rows] =  await db.connection.execute("DELETE FROM response");
    res.send("DELETE Request Called");
});

httpApp.delete('/courses/deleteAll', async (req, res) => {
    let [result, rows] =  await db.connection.execute("DELETE FROM course");
    res.send("DELETE Request Called");
});
  
//delete specific course 
/*httpApp.delete('/courses/delete',async(request,response)=>{
    let sql="DELETE FROM course WHERE Course_Number=?";
    let result1=await db.connection.execute(sql,[request.body.Course_Number]);
 
   response.status(200).json("row deleted");
 
 });*/
 httpApp.delete('/courses/delete/:id',async(request,response)=>{
    var Course_Number = request.params.id
    let sql="DELETE FROM course WHERE Course_Number=?";
    let result1=await db.connection.execute(sql,[Course_Number]);
 
   response.status(200).json("row deleted");
 
 });

//update 

/*httpApp.put('/courses/edit', async (request, response) => {
    //write the nesseary sql stetment
    let sql = "update course set Course_Name = ?,PlayList = ? where Course_Number in (?)"
   let [result,rows] = await db.connection.execute(sql, [request.body.Course_Number, request.body.Course_Name,request.body.PlayList])
   response.status(200).json("row edited");
 });*/



 //feedback api's -Ghaida'a
 httpApp.get('/feedbacks', async (request, response) => {
    //return responses to the client
    let [result, rows] = await db.connection.execute("SELECT * FROM feedback")
    response.status(200).json(result)
})

httpApp.post('/feedbacks/add', async (request, response) => {
    let [result, rows] = await db.connection.execute("insert into feedback (idFeedback,Sender_Name,Subject,Mobile_Number,Email,message) values (?,?,?,?,?,?)", [request.body.idFeedback, request.body.Sender_Name,request.body.Subject,request.body.Mobile_Number,request.body.Email,request.body.message])
    response.status(201).json(result);

});
httpApp.delete('/feedbacks/delete/:id',async(request,response)=>{
    var idFeedback = request.params.id
    let sql="DELETE FROM feedback WHERE idFeedback=?";
    let result1=await db.connection.execute(sql,[idFeedback]);
 
   response.status(200).json("row deleted");
 
 });
 httpApp.delete('/our-students/delete/:id',async(request,response)=>{
    var Student_ID = request.params.id
    let sql="DELETE FROM student WHERE Student_ID=?";
    let result1=await db.connection.execute(sql,[Student_ID]);
 
   response.status(200).json("row deleted");
 
 });

 httpApp.delete('/viewRequest/delete/:id',async(request,response)=>{
    var Request_Number = request.params.id
    let sql="DELETE FROM request WHERE Request_Number=?";
    let result1=await db.connection.execute(sql,[Request_Number]);
 
   response.status(200).json("row deleted");
 
 });

 httpApp.delete('/admins/delete/:id',async(request,response)=>{
    var Admin_ID = request.params.id
    let sql="DELETE FROM admin WHERE Admin_ID=?";
    let result1=await db.connection.execute(sql,[Admin_ID]);
 
   response.status(200).json("row deleted");
 
 });

 //update api's
httpApp.put('/course/edits',async(request,response)=>{
        let sql="UPDATE course SET Course_Name=? ,PlayList=? WHERE Course_Number=?"
        let result1=await db.connection.execute(sql,[ request.body.Course_Name,request.body.PlayList , request.body.Course_Number]);
         response.status(200).json("row edited");
         });


httpApp.put('/feedback/edits',async(request,response)=>{
        let sql="UPDATE feedback SET Sender_Name=? ,Subject=?, Mobile_Number=?, Email=?, message=? WHERE idFeedback=?"
        let result1=await db.connection.execute(sql,[request.body.Sender_Name,request.body.Subject,request.body.Mobile_Number,request.body.Email,request.body.message,request.body.idFeedback]);
        response.status(200).json("row edited");
        });

httpApp.put('/student/edits',async(request,response)=>{
        let sql="UPDATE student SET Student_Name=? ,University_Major=? WHERE Student_ID=?"
        let result1=await db.connection.execute(sql,[request.body.Student_Name,request.body.University_Major,request.body.Student_ID]);
        response.status(200).json("row edited");
        });
        
httpApp.put('/admins/edits',async(request,response)=>{
        let sql="UPDATE admin SET Admin_Name=? WHERE Admin_ID=?"
        let result1=await db.connection.execute(sql,[request.body.Admin_Name,request.body.Admin_ID]);
        response.status(200).json("row edited");
        });



