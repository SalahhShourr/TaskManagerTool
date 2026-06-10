import { useState } from "react";

function TaskMain(){
    const [taskInput, setTaskInput] = useState("");

    const [tasks, setTasks] = useState([
        {
            title: "finish this website",
            priority: "Not Implemented Yet",
            date: "Not Implemented Yet",
            actions: "Not Implemented Yet"
        }
    ]);

    function AddTask(e){
        e.preventDefault();

        if(taskInput.trim() === ""){
            return;
        }

        const newTask = {
            title: taskInput,
            priority: "Not Implemented Yet",
            date: "Not Implemented Yet",
            actions: "Not Implemented Yet"
        }

        setTasks([...tasks, newTask]);
    }

    return(
        <div>
            <div>
                <h1>All Tasks</h1>
            </div>
            <div className="addTaskSection">
                <input id="taskInput" placeholder="Task Name..." value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
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
                        {tasks.map((task) => (
                            <tr>
                                <td>{task.title}</td>
                                <td>{task.priority}</td>
                                <td>{task.date}</td>
                                <td>{task.actions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TaskMain;