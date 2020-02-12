import { drinkCoffee } from '../actions/moodAction';
import reducer from './moodReducer';

describe('mood reducer', () => {
  it('handles the DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 2 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 3 });

  });

  it(handles)
});
