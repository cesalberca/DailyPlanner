(function () {

    let tasks = document.querySelectorAll('#tasks > li')
    let dailyPlanner = document.querySelector('#dailyPlanner')

    const dragStartHandler = (e) => {
        console.log(e)
        e.dataTransfer.setData('Text', e.target.id)
    }

    const dragEndHandler = (e) => {
        console.log(e)
    }

    const dropHandler = (e) => {
        e.preventDefault()
        var data = e.dataTransfer.getData("Text")
        e.target.appendChild(document.getElementById(data))
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }
    
    const init = () => {
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener('dragstart', dragStartHandler, false)
        }

        dailyPlanner.addEventListener('drop', dropHandler, false)
        dailyPlanner.addEventListener('dragover', dragOverHandler, false)
    }

    init()
})()