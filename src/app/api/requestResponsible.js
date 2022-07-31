
axios.get(`${API_URL}/responsibles`)
    .then((res) => {
        showAllResponsibles(res.data)
    }).catch((error) => {
        console.error(error)
    });


const showAllResponsibles = (data) => {
    data.map((responsible) => {
        createResponsible(responsible)
    })
}


const createResponsible = (responsible) => {

    let newResponsible = document.createElement('option')
    newResponsible.value = responsible.id
    newResponsible.text = `${responsible.name} ${responsible.lastName} - ${responsible.chargue}`

    let selectResponsible = document.querySelector('#responsibleTask')
    selectResponsible.appendChild(newResponsible)

}

const getResponsibleById = (idResponsible) => {
    return axios.get(`${API_URL}/responsibles`, {
        params: {
            id: idResponsible
        }
    })
        .then((res) => {
            return res.data[0]
        }).catch((error) => {
            console.error(error)
        })
}