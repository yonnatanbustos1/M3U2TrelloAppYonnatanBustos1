const validateField = (field) =>{
    return validateNullOrBlank(field)
}

function validateNullOrBlank(field){
    console.log(field)
    return field == null || field == undefined || field == '' ? false : true
}

export {
    validateField
}