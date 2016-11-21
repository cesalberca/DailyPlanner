(function () {

    let tasks = document.querySelectorAll('#tasks > li')
    let dailyPlanner = document.querySelector('#dailyPlanner')

    const dragStartHandler = (e) => {
        e.dataTransfer.setData('Text', e.target.id)
    }

    const dropHandler = (e) => {
        e.preventDefault()
        let data = e.dataTransfer.getData('Text')
        e.target.appendChild(document.getElementById(data))
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    const addEventsTasks = () => {
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener('dragstart', dragStartHandler, false)
        }
    }

    const addEventsDay = () => {
        dailyPlanner.addEventListener('drop', dropHandler, false)
        dailyPlanner.addEventListener('dragover', dragOverHandler, false)
    }
    
    const init = () => {
        addEventsTasks()
        addEventsDay()        
    }

    init()
})()