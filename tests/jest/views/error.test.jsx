import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from '../../../src/shared/views/error';

configure({ adapter: new Adapter() });

it('It renders', () => {
  const wrapper = shallow(<Error />);
  expect(wrapper.length).toBe(1);
});
