import React from 'react';
import './Task.css'
import { CgClose, CgInfo } from 'react-icons/cg';
import {useHistory} from 'react-router-dom';

const Task = ({task, handleAddTaskClick, handleTaskDeletion}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    return ( 
        <>
        <div className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
        <div onClick={() => handleAddTaskClick(task.id)} className="task-title">
            {task.title}
        </div>
        <div className="btn-container">
            <button className="remove-task-btn" onClick = {() => handleTaskDeletion(task.id)} > <CgClose /> </button>
            <button className="see-task-details-btn" onClick={handleTaskDetailsClick} > <CgInfo /> </button>
        </div>
        </div>
        </>
     );
}
 
export default Task;