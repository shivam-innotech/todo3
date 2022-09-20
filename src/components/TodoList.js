import React from 'react'

const TodoList = (props) => {
    return (
        <>
            <div className="addItask">
                <h4>Todo</h4>
                <input type="text" placeholder='Your Todo....' className='form-control' id="valid" value={props.input}
                    onChange={(e) => { props.setInput(e.target.value) }}
                />
                {props.error && props.input.length <= 0 ?
                    <label className='mxy-3'>Empty</label> : ""}
                <br />
                {
                    props.toggleSubmit ? <button className="btn btn-light"
                        type="submit" onClick={props.handleSubmit}>Submit</button> :
                        <button className="btn btn-light"
                            onClick={props.handleSubmit}>Edit</button>
                }
            </div>
        </>
    )
}

export default TodoList