import React from 'react'
import logo from 'logo.svg'
import './App.css'
import { sum } from 'utils'

const al = {
  hey: 'you',
  identifier: 'identifier',
  city: 'Poznań',
  street: 'Wallstreet',
}
console.log(al)

function App(): JSX.Element {
  const c = (): string => {
    const d = 'd'

    if (d) {
      return 'd'
    }
    return 'a'
  }

  c()

  console.log('[log] test')

  const d = null

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
