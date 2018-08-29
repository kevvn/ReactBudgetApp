import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../../../src/shared/views/home/Home';

Enzyme.configure({ adapter: new Adapter() });

it('It renders', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.length).toBe(1);
});
