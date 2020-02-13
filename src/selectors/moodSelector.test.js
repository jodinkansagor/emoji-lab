import { isTired, isHyper } from "./moodSelector";

describe('mood selectors', () => {
  it('is tired when it is supposed to be tired', () => {
    const state = { coffees: 0, naps: 0 };
    const tired = isTired(state);

    expect(tired).toEqual(true);
  });

  it('is hyper when it is supposed to be hyper', () => {
    const state = { coffees: 6 };
    const hyper = isHyper(state);

    expect(hyper).toEqual(true);
  });
});
