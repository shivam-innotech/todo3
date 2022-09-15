import React, { useState } from 'react'

const ComponentsOne = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('');
        }

    }
    return (
        <>
            <div className="main-div">
                <div className="addItems">
                    <input type="text" placeholder='add item'
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    <button type="submit" onClick={addItem}>Submit</button>
                </div>

                <div className="showItems">
                    {
                        items.map((elem, ind) => {
                            return (
                                <div className="eachItem" key={ind}>
                                    <h1>{elem}</h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ComponentsOne

