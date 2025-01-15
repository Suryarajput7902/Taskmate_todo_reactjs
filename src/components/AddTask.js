const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    const handlesubmit = (e) => {
        e.preventDefault();
        if (task.id) {
            const date = new Date();
            const updatetasklist = taskList.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: task.name,
                    time: `${date.toLocaleTimeString()}   ${date.toLocaleDateString()}`
                } : todo
            ));
            setTaskList(updatetasklist);

        } else {
            const date = new Date();
            const newtask = {
                id: date.getTime(),
                name: task.name,
                time: `${date.toLocaleTimeString()}   ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newtask]);
            e.target.task.value = "";
        }

    }
    return (
        <section className="addTask">
            <form onSubmit={handlesubmit}>
                <input type="text" name="task" autoComplete="off" placeholder="Add task" maxLength="25" value={task.name} onChange={e => setTask({ ...task, name: e.target.task.value })} />
                <button type="submit" >Add</button>
            </form>
        </section>
    )
}

export default AddTask
