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

            const response = await axios.post('http://localhost:8000/users',userData)
            console.log('response',response.data);
            messageDom.innerText = 'บันทึกข้อมูลเรียบร้อยแล้ว'
            messageDom.className = 'message success'

    }catch(error){
        console.log('error message',error.message)
        console.log('error',error.errors)

        /*if(error.response){
            console.log('error',error.response.data.message);
        }*/

        let htmlData = '<div>'
        htmlData += `<div>${error.message}</div>`
        for (let i = 0; i < error.errors.length; i++){
            htmlData += `<li>${error.errors[i]}</li>`
        }
        htmlData += '</ul>'
        htmlData += '</div>'


        messageDom.innerHTML = htmlData
        messageDom.className = 'message danger'
    }

}