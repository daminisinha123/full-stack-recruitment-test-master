import React from 'react';
import TestRenderer from 'react-test-renderer';
import Card from './Card';

describe('Card', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Card />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
