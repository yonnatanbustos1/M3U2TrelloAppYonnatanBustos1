const validateForm = (objectValidate) => {


    if (!objectValidate.titleTask) return "titleTask"
    if (!objectValidate.descriptionTask) return "descriptionTask"
    if (!objectValidate.idResponsibleTask || objectValidate.idResponsibleTask == 0) return "idResponsibleTask"
    if (!objectValidate.deliverDate) return "deliverDate"

    if (validDate(objectValidate.deliverDate)) return "currentDate"
}

const validDate = (date) => {
    let currentDate = moment().format('YYYY-MM-DD')
    return moment(currentDate).isAfter(moment(date));
}

export {
    validateForm
}