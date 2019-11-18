import React from 'react';
import TestRenderer from 'react-test-renderer';

import FligthDuration from './FligtDuration';


describe('FligthDuration', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<FligthDuration />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
