import * as React from 'react';
import { ToggleButton } from './ToggleButton';
import * as renderer from 'react-test-renderer';

it('ToggleButton default', () => {
  const tree = renderer.create(<ToggleButton>Default Button</ToggleButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
