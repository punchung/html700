const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

app.use(bodyParser.json());
const port = 8000;
//สำหรับเก็บตัวแปร users (user หลายคน)
let users = []
let counter = 1


/*
1. GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
2. POST /users สำหรับการสร้าง users ใหม่บันทึกเข้าไป
3. GET /users/:id สำหรับการดึง users รายคนออกมา
4. PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
5. DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
*/

app.get('/testdb', (req, res) => {
  mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: 'webdb',
     port: 8700
   }).then((conn) =>{
     conn
     .query('SELECT * FROM users')
     .then((results) => {
       res.json(results[0]);
     })
   })
 })

//path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
app.get('/users', (req, res) => {
    const filterUsers = users.map(user => {
    return {
        id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      fullname: user.firstname + ' ' + user.lastname
    }
 })
res.json(filterUsers);
})

//path = POST /users สำหรับการสร้าง users ใหม่บันทึกเข้าไป
app.post('/users', (req, res) => {
  let user = req.body;
  user.id = counter
  counter+=1
  users.push(user);
  res.json({
    message: 'Add new user successfully',
    user: user
  });
});

//path = GET /users/:id สำหรับการดึง users รายคนออกมา
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    
    // หา index
    let selectedIndex = users.findIndex(user => user.id == id)
    res.json(users[selectedIndex]);
 })





//path = PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let updateUser = req.body;
  //ค้นหา
  let selectedIndex = users.findIndex(user => user.id == id)

  //update ข้อมูล user (null || 'ทดสอบ')
  
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
    users[selectedIndex].age = updateUser.age || users[selectedIndex].age
    users[selectedIndex].gender = updateUser.gender || users[selectedIndex].gender
  




  //update ข้อมูล user
  res.json({
    message: 'Update user successfully',
    data:{
      user: updateUser,
      indexUpdate: selectedIndex
    }
  });
})

//path = DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', (req, res) => {
  let id = req.params.id;
  //หาก่อนว่าindexของ user ที่จะลบอยู่ตรงไหน
  let selectedIndex = users.findIndex(user => user.id == id)  
  //delete users 
    users.splice(selectedIndex, 1);
    res.json({
    message: 'Delete user successfully',
      indexDelete: selectedIndex
  });

})

app.listen(port, (req, res) => {
  console.log('http server running on', +port);
})