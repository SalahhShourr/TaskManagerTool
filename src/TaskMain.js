function TaskMain(){
    return(
        <div>
            <div>
                <h1>All Tasks</h1>
            </div>
            <div className="addTaskSection">
                <input id="taskInput" placeholder="Task Name..." />
                <a onClick={AddTask} href="#">Add Task</a>
            </div>
            <div className="taskTable">
                <table>
                    <thead>
                        <th>Task Title</th>
                        <th>Priority</th>
                        <th>Due Date</th>
                        <th>Actions</th>
                    </thead>
                    <tbody id="taskBody">
                        <tr>
                            <td>Finish this website</td>
                            <td>Not Implemented yet</td>
                            <td>Not Implemented yet</td>
                            <td>Not Implemented yet</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function AddTask(){
    const taskText = document.getElementById("taskInput").value;
    if(taskText === "")
        return null;
    document.getElementById("taskInput").value = "";
    const tableSection = document.getElementById("taskBody");
    const createdTask = document.createElement("td");
    const createdRow = document.createElement("tr");
    const priority = document.createElement("td");
    const dueDate = document.createElement("td");
    const actions = document.createElement("td");
    createdTask.innerHTML = taskText;
    priority.innerHTML = "Not Implemented yet";
    dueDate.innerHTML = "Not Implemented yet";
    actions.innerHTML = "Not Implemented yet";
    createdRow.append(createdTask);
    createdRow.append(priority);
    createdRow.append(dueDate);
    createdRow.append(actions);
    tableSection.append(createdRow);
}

export default TaskMain;