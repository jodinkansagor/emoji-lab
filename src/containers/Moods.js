import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodAction';
import reducer from '../reducers/moodReducer';
import { getFace } from '../selectors/moodSelector';
// import { isTired, isHyper, isEducation, isHungry, getFace } from '../selectors';

const actions = [
  { name: drinkCoffee, text: 'Drink Coffee', stateName: 'coffees' },
  { name: eatSnack, text: 'Snack', stateName: 'snacks' },
  { name: takeNap, text: 'Nap', stateName: 'naps' },
  { name: study, text: 'Study', stateName: 'studies' },
];


const Moods = () => {
  const [mood, dispatch] = useReducer(reducer, { 
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0 
  });

  const handleSelection = (name) => {
    const desiredAction =  actions.forEach(action => {
      if(action.name === name) return action;
    });
    return dispatch(desiredAction.name);
  };

  const face = getFace(mood);

  return (
    <>
      <Controls actions={actions} handleSelection={() => handleSelection(name)} />
      <Face emoji={face} />
    </>
  )

};

Moods.propTypes = {};

export default Moods;
