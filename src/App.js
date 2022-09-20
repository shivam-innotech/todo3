import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

const App = () => {

  const [input, setInput] = useState('');
  const [itask, setItask] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setError(true)
    }
    if (!input) {
    }
    else if (input && !toggleSubmit) {
      setItask(
        itask.map((elem) => {
          if (elem.id === isEdit) {
            return { ...elem, name: input }
          }
          return elem;
        })
      )
      setInput('');
      setIsEdit(null);
      setToggleSubmit(true);
    }
    else {
      const newData = { id: new Date().getTime().toString(), name: input, isChecked: false }
      setItask([...itask, newData]);
      setInput('');
      console.log(input);
    }
  }

  const checkboxChange = (id) => {
    const change = itask.map((elem) => {
      if (elem.id === id) return { ...elem, isChecked: !elem.isChecked };
      return elem;
    });
    setItask(change);
  };

  const editItem = (id) => {
    let newEditItem = itask.find((elem) => {
      return elem.id === id
    });
    setInput(newEditItem.name);
    setIsEdit(id);
    setToggleSubmit(false);
  }
  return (
    <>
      <div className="container">
        <EditTodo
          itask={itask}
          checkboxChange={checkboxChange}
          editItem={editItem}
        />
        <TodoList
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          toggleSubmit={toggleSubmit}
          error={error}
        />
      </div>
    </>
  );
}

export default App;
