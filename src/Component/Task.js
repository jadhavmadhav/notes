import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NewTaskModal from './NewTaskModal';
import './Task.css'

export default function Task() {
  const [NewTask, setNewTask] = useState(false);

  const [showTask, setshowTask] = useState({});
  const [taskId, settaskId] = useState(1);
  const { taskName, taskDate, tasks } = showTask

  const location = useLocation()
   

  const taskData = [
    {
      id: 1,
      taskName: 'My Task 1',
      taskDate: '12/11/22022',
      tasks: [
        {
          checked: true,
          item: 'task1'
        },
        {
          checked: false,
          item: 'task2'
        },
        {
          checked: true,
          item: 'task3'
        }
      ]
    },
    {
      id: 2,
      taskName: 'My Task 2',
      taskDate: '12/11/22022',
      tasks: [
        {
          checked: true,
          item: 'task1'
        },
        {
          checked: false,
          item: 'task2'
        },
        {
          checked: true,
          item: 'task3'
        }
      ]
    },
    {
      id: 3,
      taskName: 'My Task 3',
      taskDate: '12/11/22022',
      tasks: [
        {
          checked: true,
          item: 'task1'
        },
        {
          checked: false,
          item: 'task2'
        },
        {
          checked: true,
          item: 'task3'
        }
      ]
    }
  ]

   

  const handleCreateTask = () => {
    setNewTask(true)
  }

  React.useEffect(() => {

 taskData.map((item) => {
      if (item.id === taskId) {  
        setshowTask(item)
      }
    })

  }, [taskId]);

  useEffect(() => {
    
   const selectedId= location.state
   selectedId&& settaskId(selectedId)
  }, [ ]);

  return (
    <div className='taskContainer'>
      {
        NewTask && <NewTaskModal closeModal={setNewTask} />
      }
      <div className='newTask-button'>
        <button onClick={handleCreateTask}>Create New Task</button>
      </div>

      <div className='tasks white-box'>

        <div className='task-Header'>
          <h5 className='taskName'>{taskName}</h5>
          <p className='task-time'>{taskDate}</p>
        </div>
        <div className='task-items'>
          {
            tasks.map((task,ind) => {
              const { item, checked } = task
              return (
                <div className='task-item' key={ind}>
                  <div className='checkbox'>
                    <input type="checkbox" defaultChecked={checked} />
                  </div>
                  <div className='taskList'>
                    <h6>{item}</h6>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className='taskSubmit-button'>
          <button>submit</button>
        </div>


      </div>


      <div className="row mt-3">
        {taskData.map((ele) => {
          const {id,taskName,taskDate} =ele

          return (
            <div className="col-4 col-md-3 " key={id}>
              <div className="white-box taskFiles"
              onClick={()=>settaskId(ele.id)}>
                <img
                  src={process.env.PUBLIC_URL + "/images/file.png"}
                  alt=""
                />
                <span>{taskName}</span>
                <p className="date">{taskDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div >
  )
}
