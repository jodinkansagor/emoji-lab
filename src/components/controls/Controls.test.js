import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  let wrapper;
  let handleSelection;
  let stuffFn = () => {};
  beforeEach(() => {
    const actions = [
      { name: stuffFn, text: 'stuff' },
      { name: () => {}, text: 'morepoop' }
    ];
    handleSelection = jest.fn();

    wrapper = shallow(<Controls actions={actions}handleSelection={handleSelection} />);
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handlesSelection with the action name', () => {
    wrapper.findWhere(el => el.key() === 'stuff').simulate('click');
    expect(handleSelection).toHaveBeenCalledWith(stuffFn);
  });
});
  