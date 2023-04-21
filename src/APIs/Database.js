module.exports = {

    getTasks: (() => {
        return fetch('http://localhost:5000/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
    }),

    getOneTask: ((id) =>{
        return fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
    }),

    addTasks: ((tasks) => {
        return fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tasks)
        }).then((resp) => resp.json())
    }),

    updateTasks: ((id, task) => {
        return fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then((resp) => resp.json())
    }),

    deleteTask: ((id) => {
        return fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
    }),

    getPrioritys: (() => {
        return fetch('http://localhost:5000/prioritys', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json());
    })
}