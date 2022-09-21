import React from 'react'
const TodoList = (props) => {
    return (
        <>
            <h1>Todo App</h1>
            <div className="showItask">
                {
                    props.itask.map((elem) => {
                        return (
                            <div className="eachItem" key={elem.id}>
                                <div className="flx">
                                    <input type="checkbox" checked={elem.isChecked} onChange={() => {
                                        props.checkboxChange(elem.id);
                                    }} />
                                    <h5>{elem.name}</h5>
                                    <div className="span">
                                        <span className='badge bg-secondary ms-2'>
                                            {elem.isChecked === true ? "Complete" : null}
                                        </span>
                                        <span
                                            className="bg badge bg-secondary ms-2" onClick={() => {
                                                props.editItem(elem.id);
                                            }}>
                                            Edit
                                        </span>
                                        <span
                                            className="bg badge bg-secondary ms-2" onClick={() => {
                                                props.deleteItem(elem.id)
                                            }}>
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TodoList