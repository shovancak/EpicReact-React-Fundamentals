// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputRef = React.createRef()
  const [inputValue, setInputValue] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleChange = (event) => {
    const {value} = event.target
    setInputValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={inputRef} id="username" type="text" value={inputValue} onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
