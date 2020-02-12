import { drinkCoffee, DRINK_COFFEE } from "./moodAction"

describe('mood action creators', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee(1);

    expect(action).toEqual({
      type: DRINK_COFFEE,
      payload: 1
    });
  });
});
