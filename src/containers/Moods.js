import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study, exercise } from '../actions/moodAction';
import reducer from '../reducers/moodReducer';
import { getFace } from '../selectors/moodSelector';


const actions = [
  { name: drinkCoffee, text: 'Drink Coffee', stateName: 'coffees' },
  { name: eatSnack, text: 'Snack', stateName: 'snacks' },
  { name: takeNap, text: 'Nap', stateName: 'naps' },
  { name: study, text: 'Study', stateName: 'studies' },
  { name: exercise, text: 'Exercise', stateName: 'exercises' }
];


const Moods = () => {
  const [mood, dispatch] = useReducer(reducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
    exercises: 0
  });

  const handleSelection = (name) => {
    if (name === drinkCoffee) return dispatch(drinkCoffee());
    if (name === eatSnack) return dispatch(eatSnack());
    if (name === takeNap) return dispatch(takeNap());
    if (name === study) return dispatch(study());
    if (name === exercise) return dispatch(exercise());
  };

  const getActions = (state) => {
    return actions.map(action => ({
      ...action,
      count: state[action.stateName]
    }));
  };

  const controlActions = getActions(mood);
  const face = getFace(mood);

  return (
    <>
      <Controls actions={controlActions} handleSelection={(name) => handleSelection(name)} />
      <Face emoji={face} />
    </>
  );

};

Moods.propTypes = {};

export default Moods;
