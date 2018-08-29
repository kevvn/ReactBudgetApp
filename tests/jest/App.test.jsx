import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../src/shared/App';

configure({ adapter: new Adapter() });

it('It renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
