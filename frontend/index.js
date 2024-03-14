const BASE_URL = 'http://localhost:8000'

let mode ='CREATE' //defult mode is create
let selectedId =''

window.onload = async() => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    if(id){
        mode = 'EDIT'
        selectedId = id 

        //1.ดึงข้อมูลuser เก่าออกมาก่อน
        try{
            const response = await axios.get(`${BASE_URL}/users/${id}`)
            const user = response.data

        //2.เราจะนำข้อมูล user กลับเข้าไปใส่ใน input 
        let firstnameDom = document.querySelector('input[name=firstname]')
        let lastnameDom = document.querySelector('input[name=lastname]')
        let ageDom = document.querySelector('input[name=age]')
        let descriptionDom = document.querySelector('textarea[name=description]')
        
        firstnameDom.value = user.firstname
        lastnameDom.value = user.lastname
        ageDom.value = user.age
        descriptionDom.value = user.description

        let genderDom = document.querySelectorAll('input[name=gender]') 
        let interestDoms = document.querySelectorAll('input[name=interest]')
        
        for (let i = 0; i < genderDom.length; i++){
            if(genderDom[i].value == user.gender){
                genderDom[i].checked = true
            }
        }

        for (let i = 0; i < interestDoms.length; i++) {
            if (user.interests.includes(interestDoms[i].value)) {
                interestDoms[i].checked = true
            }
        }
        
        }catch(error){
            console.error('error',error)
        }
    }
}

const validateData = (userData) => {
    let errors = []
    if (!userData.firstname){
        errors.push('กรุณากรอกชื่อ')
    }
    if (!userData.lastname){
        errors.push('กรุณากรอกนามสกุล')
    }
    if (!userData.age){
        errors.push('กรุณากรอกอายุ')
    }
    if (!userData.gender){
        errors.push('กรุณาเลือกเพศ')
    }
    if (!userData.interests){
        errors.push('กรุณาเลือกความสนใจ')
    }
    if (!userData.description){
        errors.push('กรุณากรอกคำอธิบาย')
    }


    return errors
}

const submitData = async () => {
    let firstnameDom = document.querySelector('input[name=firstname]')
    let lastnameDom = document.querySelector('input[name=lastname]')
    let ageDom = document.querySelector('input[name=age]')

    let genderDom = document.querySelector('input[name=gender]:checked') || {}
    let interestDoms = document.querySelectorAll('input[name=interest]:checked') || {}
    
    let descriptionDom = document.querySelector('textarea[name=description]')

    let messageDom = document.getElementById('message')

    try{
        let interest = ''

        for (let i = 0;i < interestDoms.length; i++){
            interest += interestDoms[i].value 
            if (i != interestDoms.length - 1){
                interest += ','
            }

        }
        console.log('test')
        let userData = {
            firstname : firstnameDom.value,
            lastname : lastnameDom.value,
            age : ageDom.value,
            gender : genderDom.value,
            description : descriptionDom.value,
            interests : interest
        }
        console.log('submitData',userData);
        const errors = validateData(userData)

        if(errors.length > 0){
            //มี error
            throw {
                message : 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors : errors 
            }
        }

        let message = 'บันทึกข้อมูลเรียบร้อยแล้ว'

        if(mode == 'CREATE'){ //เพิ่มข้อมูล
            const response = await axios.post(`${BASE_URL}/users`, userData)
            console.log('response', response.data)
        }else { //แก้ไขข้อมูล
            const response = await axios.put(`${BASE_URL}/users/${selectedId}`, userData)
            message = 'แก้ไขข้อมูลเรียบร้อยแล้ว'
            console.log('response', response.data)
        }
        
        /*const response = await axios.post(`${BASE_URL}/users`, userData)
        console.log('response', response.data)*/ //post ข้อมูลไปที่ server
        
        messageDom.innerText = message
        messageDom.className = 'message success'

    }catch(error){
        console.log('error message', error.message)
        console.log('error ', error.errors)
        
        if (error.response) {
            console.log(error.response)
            error.message = error.response.data.message
            error.errors = error.response.data.errors
        }

        let htmlData = '<div>';
        htmlData += `<div>${error.message}</div>`; // แก้ให้เป็น backticks
        htmlData += '<ul>';
        for(let i = 0; i < error.errors.length; i++){
            htmlData += `<li>${error.errors[i]}</li>`; // แก้ให้เป็น backticks
        }
        htmlData += '</ul>';
        htmlData += '</div>';

        messageDom.innerHTML = htmlData;
        messageDom.className = 'message danger';
    }

}