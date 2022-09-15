import React, { useState } from 'react'

const ComponentsOne = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('fill it');
        }
        else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);

            setInputData('');

            setIsEditItem(null);
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }
    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);
    }

    return (
        <>
            <div className="main-div">
                <div className="addItems">
                    <input type="text" placeholder='add item'
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                    {
                        toggleSubmit ? <button type="submit" onClick={addItem}>Submit</button> :
                            <button onClick={addItem}>Edit</button>
                    }

                </div>

                <div className="showItems">
                    {
                        items.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <h1>{elem.name}</h1>
                                    <button onClick={() => editItem(elem.id)}>Edit</button>
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

