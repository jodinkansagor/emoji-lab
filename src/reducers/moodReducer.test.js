import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodAction';
import reducer from './moodReducer';

describe('mood reducer', () => {
  it('handles the DRINK_COFFEE case', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 2 };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 3 });

  });

  it('handles the EAT_SNACK case', () => {
    const action = eatSnack();
    const initialState = { snacks: 3 };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ snacks: 4 });
  });

  it('handles the TAKE_NAP case', () => {
    const action = takeNap();
    const initialState = { naps: 5 };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ naps: 6 });
  });

  it('handles the STUDY case', () => {
    const action = study();
    const initialState = { studies: 1 };

    const newState = reducer(initialState, action);
    expect(newState).toEqual({ studies: 2 });
  })
});
