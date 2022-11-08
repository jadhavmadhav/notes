import React,{useState} from 'react'
import NewTaskModal from './NewTaskModal';
import './Task.css'

export default function Task() {
const [NewTask, setNewTask] = useState(false);
  const taskData = [
    {
      taskName: 'My Task', 
      taskDate: '12/11/22022',
      tasks: [
        {
          checked:true,
          item:'task1'
        },
        {
          checked:false,
          item:'task2'
        },
        {
          checked:true,
          item:'task3'
        }
      ]
    }
  ]

  const TaskData = [
    { id: 1, title: "Task1", date: "19/10/2022" },
    { id: 2, title: "Task2", date: "19/10/2022" },
    { id: 3, title: "Task3", date: "21/10/2022" },
    { id: 4, title: "Task1", date: "19/10/2022" },
    { id: 5, title: "Task2", date: "19/10/2022" },
    { id: 6, title: "Task3", date: "21/10/2022" },
    { id: 7, title: "Task1", date: "19/10/2022" },
    { id: 8, title: "Task2", date: "19/10/2022" },
    { id: 9, title: "Task3", date: "21/10/2022" },
  ];

  const handleCreateTask =()=>{
    setNewTask(true)
  }

  return (
    <div className='taskContainer'>
    {
      NewTask&& <NewTaskModal closeModal={setNewTask}/>
    }
      <div className='newTask-button'>
        <button onClick={handleCreateTask}>Create New Task</button>
      </div>

      <div className='tasks'>
        {
          taskData?.map((ele) => {
            const { taskName, taskDate, tasks } = ele
            return (
              <>
                <div className='task-Header'>
                  <h5 className='taskName'>{taskName}</h5>
                  <p className='task-time'>{taskDate}</p>
                </div>
                <div className='task-items'>
                  {
                    tasks?.map((task) => { 
                      const { item, checked } = task 
                      return (
                        <div className='task-item'>
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


              </>
            )
          })
        }

      </div>

      
        <div className="row mt-3">
          {TaskData.map((ele) => {
            return (
              <div className="col-4 col-md-3 ">
                <div className=" taskFiles">
                  <img
                    src={process.env.PUBLIC_URL + "/images/file.png"}
                    alt=""
                  />
                  <span>{ele.title}</span>
                  <p className="date">{ele.date}</p>
                </div>
              </div>
            );
          })}
        </div> 
    </div >
  )
}
