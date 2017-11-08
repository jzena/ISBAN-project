import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

//  Shallow rendering is great for isolated unit tests,
it('renders without crashing', () => {
  shallow(<Login />);
});