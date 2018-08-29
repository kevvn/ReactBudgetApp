// import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PageNotFound from '../../../src/shared/views/NotFound';

Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';

it('It renders with context', () => {
  const context = { setStatus: jest.fn() };
  expect(PageNotFound({}, context));
});

it('It renders without context', () => {
  expect(PageNotFound({}));
});
