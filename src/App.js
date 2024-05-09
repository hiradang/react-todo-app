import './App.css';
import Input from './Input';
import Task from './Task';
import { useState } from 'react'

function App() {
  const [taskName, setTaskName] = useState('')
  const [doingTasks, setDoingTasks] = useState([])
  const [finishedTasks, setFinishedTasks] = useState([])

  function addNewTask() {
    // doingTasksに追加する
    setDoingTasks([...doingTasks, taskName]);
    // inputをリセットする
    setTaskName('')
  }

  function finishTask(taskName) {
    //finishedTasksに追加する
    setFinishedTasks([...finishedTasks, taskName]);

    // doingTasksから削除する
    let newDoingTasks = doingTasks.filter(task => task !== taskName)
    setDoingTasks(newDoingTasks)
  }

  function deleteTask(taskName) {
    // finishedTasksから削除する
    let newFinishedTasks = finishedTasks.filter(task => task !== taskName)
    setFinishedTasks(newFinishedTasks)
  }

  return (
    <div className="App">
      <h3>Add a new task</h3>
      <Input taskName={taskName} setTaskName={setTaskName} addNewTask={addNewTask} />
      <h3>未完了タスク</h3>
      <div>
        {doingTasks.map((task) => <Task key={task} task={task} finishTask={finishTask}/>)}
      </div>
      <h3>完了タスク</h3>
        {finishedTasks.map((task) => <Task key={task} task={task} isDone={true} deleteTask={deleteTask} />)}
    </div>
  );
}

export default App;
