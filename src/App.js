import React from 'react'
import Setup from './tutorial/1-useState/setup/2-useState-basics';
import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
import UseStateOjbect from './tutorial/1-useState/setup/4-useState-object';
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';
import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics';
import UseEffectCleanUp from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
import UseEffectFetch from './tutorial/2-useEffect/setup/3-useEffect-fetch-data';
import ConditionalRendering from './tutorial/3-conditional-rendering/setup/1-multiple-returns';
import ShortCircuit from './tutorial/3-conditional-rendering/setup/2-short-circuit';
import ShowHide from './tutorial/3-conditional-rendering/setup/3-show-hide';
import ControlledInputs from './tutorial/4-forms/setup/1-controlled-inputs';
import MultipleInputs from './tutorial/4-forms/setup/2-multiple-inputs';
import UseRefBasics from './tutorial/5-useRef/setup/1-useRef-basics';
import UseReducerBasics from './tutorial/6-useReducer/setup'
import PropDrillngBasics from './tutorial/7-prop-drilling/setup/1-prop-drilling'
import UseContextBasics from './tutorial/8-useContext/setup/1-context-api';
import CustomHooksBasics from './tutorial/9-custom-hooks/setup/1-fetch-example';
import PropTypesBasics from './tutorial/10-prop-types/setup';

function App() {
  return (
    <div className='container'>
      <PropTypesBasics />
      <CustomHooksBasics />
      <UseContextBasics />
      <PropDrillngBasics />
      <UseReducerBasics />
      <UseRefBasics />
      <MultipleInputs />
      <ControlledInputs />
      <ShowHide />
      <ShortCircuit />
      <ConditionalRendering />
      <UseEffectFetch />
      <UseEffectCleanUp />
      <UseEffectBasics />
      <UseStateCounter />
      <UseStateOjbect />
      <UseStateArray />
      <Setup />
    </div>
  )
}

export default App
