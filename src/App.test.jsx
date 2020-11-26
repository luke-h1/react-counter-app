import React from 'react';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders component without error', () => { 
  const wrap = shallow(<App/>); 
})