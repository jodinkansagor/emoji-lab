import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK, takeNap, TAKE_NAP, study, STUDY } from './moodAction';

describe('mood action creators', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee(1);

    expect(action).toEqual({
      type: DRINK_COFFEE,
      payload: 1
    });
  });

  it('creates a eat snack action', () => {
    const action = eatSnack(2);

    expect(action).toEqual({
      type: EAT_SNACK,
      payload: 2
    });
  });

  it('creates a take nap action', () => {
    const action = takeNap(2);

    expect(action).toEqual({
      type: TAKE_NAP,
      payload: 2
    });
  });

  it('creates a study action', () => {
    const action = study(3);

    expect(action).toEqual({
      type: STUDY,
      payload: 3
    });
  });
});

