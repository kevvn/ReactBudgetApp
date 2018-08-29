import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '.';

Enzyme.configure({ adapter: new Adapter() });

it('It renders', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.length).toBe(1);
});
