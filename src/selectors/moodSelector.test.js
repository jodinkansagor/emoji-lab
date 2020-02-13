import { isTired, isHyper, isEducated, isHungry, getFace } from './moodSelector';

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
  });

  it('is very angry if tired and hungry', () => {
    expect(getFace({ coffees: 0, naps: 0, snacks: 0 })).toEqual('🤬');
  });

  it('is sick if hyper and hungry', () => {
    expect(getFace({ coffees: 4, snacks: 0 })).toEqual('🤮');
  });

  it('is sleeping if tired', () => {
    expect(getFace({ coffees: 4, snacks: 0 })).toEqual('🤮');
  });

  it('is crazy if hyper', () => {
    expect(getFace({ coffees: 4, naps: 0, snacks: 0, studies: 0 })).toEqual('🤮');
  });

  it('is mindblown if educated', () => {
    expect(getFace({ coffees: 1, naps: 0, snacks: 1, studies: 3 })).toEqual('🤯');
  });

  it('is angry if hungry', () => {
    expect(getFace({ coffees: 1, naps: 0, snacks: 0, studies: 0 })).toEqual('😡');
  });

  it('is happy if not tired, hungry, educated, or hungry', () => {
    expect(getFace({ coffees: 1, naps: 0, snacks: 1, studies: 0 })).toEqual('😀');
  });
});

