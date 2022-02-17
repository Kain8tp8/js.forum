const addBtn = document.querySelector('#add')
const elements = document.querySelector('#elements')

const nameEdit = document.querySelector('#name')
const surnameEdit = document.querySelector('#surname')
const ageEdit = document.querySelector('#age')

const error = document.querySelector('.alert.alert-danger')

addBtn.onclick = () => {
    let name = nameEdit.value
    let surname = surnameEdit.value
    let age = ageEdit.value

    if (name === '' && surname === '' && age === '') {
        error.classList.remove('d-none')
        error.innerText = "Matini kiritig"
        return
    }


    nameEdit.value = ''
    surnameEdit.value = ''
    ageEdit.value = ''

    let card = document.createElement('div')
    card.classList.add('card')

    let header = document.createElement('div')
    header.classList.add('card-header')

    let body = document.createElement('div')
    body.classList.add('card-body')

    let section = document.createElement('div')
    section.classList.add('card-body')

    let footer = document.createElement('div')
    footer.classList.add('card-footer')

    let remove = document.createElement('button')
    remove.classList.add('btn', 'btn-danger', 'btn-sm')

    header.innerText = name.value
    body.innerText = surname.value
    section.innerText = age.value
    remove.innerText = "Remove"

    remove.onclick = () => {
        elements.removeChild(card)
    }

    footer.appendChild(remove)

    card.appendChild(header)
    card.appendChild(body)
    card.appendChild(section)
    card.appendChild(footer)

    elements.appendChild(card)


}