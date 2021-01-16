import React from 'react';
import Setup from '../../1-useState/setup/2-useState-basics';
import UseStateArray from '../../1-useState/setup/3-useState-array';
import UseStateOjbect from '../../1-useState/setup/4-useState-object';
import UseStateCounter from '../../1-useState/setup/5-useState-counter';
import UseEffectBasics from '../../2-useEffect/setup/1-useEffect-basics';
import UseEffectCleanUp from '../../2-useEffect/setup/2-useEffect-cleanup';
import UseEffectFetch from '../../2-useEffect/setup/3-useEffect-fetch-data';
import ConditionalRendering from '../../3-conditional-rendering/setup/1-multiple-returns';
import ShortCircuit from '../../3-conditional-rendering/setup/2-short-circuit';
import ShowHide from '../../3-conditional-rendering/setup/3-show-hide';
import ControlledInputs from '../../4-forms/setup/1-controlled-inputs';
import MultipleInputs from '../../4-forms/setup/2-multiple-inputs';
import UseRefBasics from '../../5-useRef/setup/1-useRef-basics';
import UseReducerBasics from '../../6-useReducer/setup';
import PropDrillngBasics from '../../7-prop-drilling/setup/1-prop-drilling';
import UseContextBasics from '../../8-useContext/setup/1-context-api';
import CustomHooksBasics from '../../9-custom-hooks/setup/1-fetch-example';
import PropTypesBasics from '../../10-prop-types/setup';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
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
  );
};

export default Home;
