import React, { useState } from 'react'

const TodoApp = () => {
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
                <h1>Todo App</h1>
                <div className="showItask">
                    {
                        itask.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <div className="flx">
                                        <input type="checkbox" checked={elem.isChecked} onChange={() => {
                                            checkboxChange(elem.id);
                                        }} />
                                        <h5>{elem.name}</h5>
                                        <div className="span">
                                            <span className='badge bg-secondary ms-2'>
                                                {elem.isChecked === true ? "Complete" : null}
                                            </span>
                                            <span
                                                className="badge bg-secondary ms-2" onClick={() => {
                                                    editItem(elem.id);
                                                }}>
                                                Edit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="addItask">
                    <h4>Todo</h4>
                    <input type="text" placeholder='Your Todo....' className='form-control' id="valid" value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    {error && input.length <= 0 ?
                        <label className='mxy-3'>Empty</label> : ""}
                    <br />
                    {
                        toggleSubmit ? <button className="btn btn-light" type="submit" onClick={handleSubmit}>Submit</button> :
                            <button className="btn btn-light" onClick={handleSubmit}>Edit</button>
                    }
                </div>
            </div>
        </>
    )
}

export default TodoApp

