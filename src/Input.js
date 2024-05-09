export default function Input(props) {
  return (
    <div>
        <input
          placeholder="タスクを追加する"
          type='text'
          value={props.taskName}
          onChange={(e) => props.setTaskName(e.target.value)}
        ></input>
        <button onClick={props.addNewTask}>追加</button>
    </div>
  );
}
