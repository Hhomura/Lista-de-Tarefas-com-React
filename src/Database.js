module.exports = {

    getTasks: (() => {
        fetch('http://localhost:5000/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
            .then((data) => {
                return data;
            }).catch((error) => console.log("Erro: " + error));
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
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then((resp) => resp.json())
            .then((data) => {
                return data;
            }).catch((error) => console.log("Erro: " + error));
    }),

    deleteTask: ((id) => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log("data")
            })
            .catch((error) => console.log(`Error: ${error}`));
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