import { validateForm } from "../utils/validator.js"

const messages = {
    titleTask : 'El campo \"Titulo tarea\" no puede estar vacio',
    descriptionTask: 'El campo \"Descripcion\" no puede estar vacio',
    idResponsibleTask: 'El campo \"Responsable\" no puede estar vacio',
    deliverDate: 'El campo \"Fecha de entrega\" no puede estar vacio',
    currentDate: 'La \"Fecha de entrega\" debe ser mayor o igual a la fecha del sistema'
}

const form = document.querySelector('#formNewTask')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const formData = ev.target

    const dataValidate = {
        titleTask: formData.titleTask.value,
        descriptionTask: formData.descriptionTask.value,
        idResponsibleTask: formData.responsibleTask.value,
        deliverDate: formData.deliverDate.value,
    }
    
    const validForm = validateForm(dataValidate)

    if(validForm){
        alert(messages[validForm])
        return
    }

    const dataTask = {
        titleTask: formData.titleTask.value,
        descriptionTask: formData.descriptionTask.value,
        idResponsibleTask: Number(formData.responsibleTask.value),
        deliverDate: moment(formData.deliverDate.value).format('DD/MM/YYYY'),
        creationDate: moment().format('DD/MM/YYYY'),
        state: "to-do"
    }

    axios.post(`${API_URL}/tasks`, dataTask)
        .then((res) => {
            createTask(res.data)
            formData.reset()
        }).catch((error) => {
            console.error(error)
        });

})