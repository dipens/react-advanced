import React from 'react'
import Setup from './tutorial/1-useState/setup/2-useState-basics';
import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
import UseStateOjbect from './tutorial/1-useState/setup/4-useState-object';
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';
import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics';

function App() {
  return (
    <div className='container'>
      <UseEffectBasics />
      <UseStateCounter />
      <UseStateOjbect />
      <UseStateArray />
      <Setup />
    </div>
  )
}

export default App
