import React from 'react';
import TestRenderer from 'react-test-renderer';
import FlightCard from './FlightCard';


describe('FlightCard', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<FlightCard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
