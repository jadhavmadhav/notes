import React, { useState } from 'react'
import './NewTaskModal.css'
export default function NewTaskModal({ closeModal }) {
     const [task, setTask] = useState();
     const [taskTitle, setTaskTitle] = useState()
     const [date, setdate] = useState()
     const [NewTasks, setNewTasks] = useState([])

     const [final, setfinal] = useState();

     const handleTaskTitle = (e) => {
          setTaskTitle(e.target.value)
     }

     const hadleChangeDate = (e) => {
          setdate(e.target.value)
     }

     const handleChangeTask = (e) => {
          setTask(e.target.value)
     }

     const handleAddTask = () => {
          const date = new Date()
          setNewTasks([...NewTasks, { task, createdDate: date }])
          setTask('')
     }

     const handleSubmitTask = () => {
          setfinal({
               taskTitle,
               completeDate: date,
               tasks: NewTasks
          })
          closeModal(false)
     }
     console.log(final)
     return (
          <div className='NewTaskModal-conatiner'>

               <div className='task-modal'>
                    <div className='taksCloseButton'>
                         <h4 onClick={()=>closeModal()}>X</h4>
                    </div>
                    <div className='taskModel-header'>
                         <div className='taskModal-headerName'>
                              <input type='text' onChange={handleTaskTitle} placeholder='Enter Task Title' />
                         </div>
                         <div className='taskModal-headerDate'>
                              <label forHTML='completeDate'>Date :</label>
                              <input type='date' name='completeDate' onChange={hadleChangeDate} />
                         </div>
                    </div>
                    <div className='addTask-container'>
                         <div className='insert-tasks'>
                              <input className='insert-task' type="text" value={task} onChange={handleChangeTask} placeholder='Enter your task' />
                              <button className='add-task-btn' onClick={handleAddTask}>Add Task</button>
                         </div>
                         <div className='tableData'>

                              <table >

                                   {
                                        NewTasks.map((item, ind) => {
                                             const { task, createdDate } = item
                                             let today = createdDate;
                                             let dd = String(today.getDate()).padStart(2, '0');
                                             let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                                             let yyyy = today.getFullYear();

                                             let hours = createdDate.getHours()
                                             let minutes = createdDate.getMinutes()
                                             let seconds = createdDate.getSeconds()
                                             let srNo = ind + 1
                                             return (
                                                  <tr className='Added-task' key={ind}>
                                                       <td className='srNo' >{srNo}</td>
                                                       <td className='tasklist-item'>{task}</td>
                                                       <td className='task-time'>{`${dd}/${mm}, ${hours}:${minutes}`}</td>
                                                  </tr>
                                             )
                                        })
                                   }
                              </table>

                         </div>
                    </div>

                    <div className='task-submit-button'>
                         <button className='newtask-submit-btn'
                              onClick={handleSubmitTask}>Submit Task</button>
                    </div>
               </div>
          </div>
     )
}
