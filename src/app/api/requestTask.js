const API_URL = "https://my-json-server.typicode.com/yonnatanbustos1/M3U2TrelloAppYonnatanBustos1"


axios.get(`${API_URL}/tasks`)
    .then((res) => {
        showAllTasks(res.data)
    }).catch((error) => {
        console.error(error)
    });


const showAllTasks = (data) => {
    data.map((task) => {
        createTask(task)
    })
}


const createTask = async (task) => {

    let newTask = document.createElement('a')
    newTask.classList.add('list-group-item')
    newTask.classList.add('list-group-item-action')
    newTask.href = '#'


    let contentTitle = document.createElement('div')
    contentTitle.classList.add('d-flex')
    contentTitle.classList.add('w-100')
    contentTitle.classList.add('justify-content-between')

    let titleTask = document.createElement('h5')
    titleTask.classList.add('mb-1')
    titleTask.innerText = task.titleTask

    let createDate = document.createElement('small')
    createDate.innerText = task.creationDate

    contentTitle.appendChild(titleTask)
    contentTitle.appendChild(createDate)

    let descriptionTask = document.createElement('p')
    descriptionTask.classList.add('mb-1')
    descriptionTask.innerText = `Descripción: ${task.descriptionTask}`

    let responsible = await getResponsibleById(task.idResponsibleTask)

    let responsibleTask = document.createElement('small')
    responsibleTask.classList.add('text-muted')
    responsibleTask.innerText = `Responsable: ${responsible.name} ${responsible.lastName} - ${responsible.chargue}`

    let deliverDate = document.createElement('p')
    deliverDate.innerText = `Fecha entrega: ${task.deliverDate}`

    newTask.appendChild(contentTitle)
    newTask.appendChild(descriptionTask)
    newTask.appendChild(responsibleTask)
    newTask.appendChild(deliverDate)


    let containerToDo = document.querySelector('#containerToDo')
    let containerInProgress = document.querySelector('#containerInProgress')
    let containerDone = document.querySelector('#containerDone')

    if (task.state === 'to-do') {
        containerToDo.appendChild(newTask)
    }
    if (task.state === 'in-progress') {
        containerInProgress.appendChild(newTask)
    }
    if (task.state === 'done') {
        containerDone.appendChild(newTask)
    }

}