import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    done: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const toggleTaskDone = (id) => {
    const taskCopy = [...tasks];

    taskCopy.forEach((task) => {
      if (task._id === id) {
        task.done = !task.done;

        if (task.done) setTasksCompleted(tasksCompleted + 1);
        else if (!task.done) setTasksCompleted(tasksCompleted - 1);
      }
    });

    setTasks(taskCopy);
  };

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTaskDone} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
