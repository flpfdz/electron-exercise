import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });

  it('renders title', () => {
    render(<App />);
    // console.log('header - ', screen.getAllByDisplayValue);
    expect(screen.getByText('electron-react-boilerplate')).toBeInTheDocument();
  });
});
