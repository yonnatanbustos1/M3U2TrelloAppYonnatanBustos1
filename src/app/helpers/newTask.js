const form = document.querySelector('#formNewTask')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const formData = ev.target

    const dataTask = {
        titleTask: formData.titleTask.value,
        descriptionTask: formData.descriptionTask.value,
        responsibleTask: formData.responsibleTask.value,
        deliverDate: formData.deliverDate.value,
        creationDate: moment().format('DD/MM/YYYY'),
        state: "to-do"
    }

    axios.post(`${API_URL}/task`, dataTask)
        .then((res) => {
            createTask(res.data)
            formData.reset()
        }).catch((error) => {
            console.error(error)
        });

})