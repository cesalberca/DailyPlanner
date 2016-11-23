(function () {
    const swal = require('sweetalert')

    const addEventsTasks = () => {
        let items = document.querySelectorAll('[data-draggable="item"]')
        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute('draggable', 'true')
        }
    }

    const addTask = () => {
        const newTask = prompt('Introduce una nueva tarea')
        swal({
            title: 'Error!',
            text: 'Here\'s my error message!',
            type: 'error',
            confirmButtonText: 'Cool'
        })
    }

    const init = () => {

        addEventsTasks()

        let item = null

        document.addEventListener('dragstart', (e) => {
            item = e.target
            e.dataTransfer.setData('Text', '')
        }, false) 

        document.addEventListener('dragover', (e) => {
            if (item) e.preventDefault()
        }, false)

        document.addEventListener('drop', (e) => {
            if (e.target.getAttribute('data-draggable') === 'target') {
                e.target.appendChild(item)
                e.preventDefault()
            }
        }, false)

        document.addEventListener('dragend', (e) => {
            item = null
        }, false)

        const bAddTask = document.querySelector('#add-task')
        bAddTask.addEventListener('click', (e) => { addTask() }, false)
    }

    init()
})()