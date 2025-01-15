const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    // const tasks = [{
    //     id: "1001",
    //     name: "surya chauhan",
    //     time: "10:10 AM 01/01/2025"
    // }, {
    //     id: "1002",
    //     name: "kunj chauhan",
    //     time: "10:10 AM 01/01/2025"
    // }, {
    //     id: "1003",
    //     name: "muskan chauhan",
    //     time: "10:10 AM 01/01/2025"
    // }]
    const handleEdit = (id) => {
        const edit = taskList.find(todo => todo.id === id)
        setTask(edit);
    }
    const handleDelete = (id) => {
        setTaskList(taskList.filter(todo => todo.id !== id));
    }
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="tittle">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button onClick={() => setTaskList([])} className="clearAll" >Clear All</button>
            </div>
            <ul>
                {
                    taskList.map((todo) => (
                        <li key={todo.id}>
                            <p>
                                <span className="name">{todo.name}</span>
                                <span className="time">{todo.time}</span>
                            </p>
                            <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                            <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                        </li>
                    ))
                }

            </ul>
        </section>
    )
}

export default ShowTask
