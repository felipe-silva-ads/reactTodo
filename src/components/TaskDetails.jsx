import React from 'react';
import { useParams } from 'react-router';
import Button from './Button';
import './TaskDetails.css';
import { useHistory } from 'react-router';


const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () =>{
        history.goBack();
    }
    return ( 
        <>
            <div className="back-btn-container">
                <Button onClick={handleBackButtonClick} >Voltar</Button>
            </div>

            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis incidunt laboriosam iste esse similique nobis!
                </p>
            </div>
        </> 
    );
}
 
export default TaskDetails;