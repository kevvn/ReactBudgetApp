import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Router from '../../src/shared/Router';

configure({ adapter: new Adapter() });

it('It renders', () => {
  const wrapper = shallow(<Router />);
  expect(wrapper.length).toBe(1);
});
