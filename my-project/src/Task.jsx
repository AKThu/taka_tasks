import { useState, useEffect } from 'react';

const Task = () => {
    // const [status, setStatus] = useState("not done");
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/tasks")
            .then(res => {
                return res.json();
            })
            .then((data) => {
                // console.log(data, typeof(data))
                setTasks(data);
                // tasks.map((task) => console.log(task.id))
            })
            .catch((err) => {
                console.log(err);
            })
            
    }, []);

    const input = (e) => {
        console.log(e);
    }
    

    return (
        <>
            { tasks && tasks.map((task) => 
                <div className="flex items-center" key={task.id}>
                    <input type="checkbox" checked={(task.status === "not done") ? false : true}/>
                    <p className="ml-2 inline-block text-stone-700">{task.name}</p>
                </div>
            )}
            <button onClick={input}>click me</button>
        </>
    );
}
 
export default Task;