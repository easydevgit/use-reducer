import {useReducer, useState} from "react";

function ChildComponent() {

  const [persons, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case 'ADD_PERSON':
        return [
          ...state,
          {
            name: action.person.name,
            secondName: action.person.secondName,
            lastName: action.person.lastName
          }
        ]
      default:
        return state
    }

  }, []);

  const [data, updateData] = useReducer((state, action) => {
    const newData = {
      ...state,
      ...action
    }

    if (newData.name.length > 10) {
      newData.name = newData.name.substring(0, 10)
    }

    return newData
  }, {name: 'John', secondName: 'Doe', lastName: 'Smith'})

  const person = {
    name: data.name,
    secondName: data.secondName,
    lastName: data.lastName
  }

  return (
    <div className='info-block'>
      <input value={data.name} onChange={e => updateData({name: e.target.value})}/>
      <input value={data.secondName} onChange={e => updateData({secondName: e.target.value})}/>
      <input value={data.lastName} onChange={e => updateData({lastName: e.target.value})}/>
      <button onClick={() => dispatch({type: "ADD_PERSON", person})}>Save</button>

      <div> {`${data.name} ${data.secondName}  ${data.lastName}`} </div>

      <h2>Persons</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.secondName} {person.lastName}</li>
        ))}
      </ul>
    </div>
  )
}

export default ChildComponent
