export default function Task(props) {
    return (
      <div className={`task ${props?.isDone ? 'task-done' : 'task-doing'}`}>
        <p>{props.task}</p>
        <div>
          {!props.isDone && <button onClick={() => props.finishTask(props.task)}>完了</button>
          }
          {props.isDone && <button onClick={() => props.deleteTask(props.task)}>削除</button>}
        </div>
      </div>
    );
  }
  