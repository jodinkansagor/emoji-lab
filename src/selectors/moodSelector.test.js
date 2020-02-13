import { isTired, isHyper, isEducated, isHungry } from "./moodSelector";

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

  it('is educated when it is supposedto be educated', () => {
    const state = { studies: 10 };
    const educated = isEducated(state);

    expect(educated).toEqual(true);
  });
  
  it('is hungry when its supposed to be hungry', () => {
    const state = { snacks: 0 };
    const hungry = isHungry(state);

    expect(hungry).toEqual(true);
  });

  it('is not hungry when it has been fed', () => {
    const state = { snacks: 3 };
    const hungry = isHungry(state);

    expect(hungry).toEqual(false);
  })
});
