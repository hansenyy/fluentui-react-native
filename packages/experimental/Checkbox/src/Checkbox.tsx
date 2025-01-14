/** @jsx withSlots */
import * as React from 'react';
import { View } from 'react-native';
import { checkboxName, CheckboxType, CheckboxProps } from './Checkbox.types';
import { Text } from '@fluentui-react-native/experimental-text';
import { stylingSettings } from './Checkbox.styling';
import { compose, mergeProps, withSlots, UseSlots } from '@fluentui-react-native/framework';
import { useCheckbox } from './useCheckbox';
import { Svg, Path } from 'react-native-svg';

export const Checkbox = compose<CheckboxType>({
  displayName: checkboxName,
  ...stylingSettings,
  slots: {
    root: View,
    checkbox: View,
    checkmark: Svg,
    content: Text,
  },
  render: (userProps: CheckboxProps, useSlots: UseSlots<CheckboxType>) => {
    // configure props and state for checkbox based on user props
    const Checkbox = useCheckbox(userProps);
    // grab the styled slots
    const Slots = useSlots(userProps, (layer) => Checkbox.state[layer] || userProps[layer]);
    // now return the handler for finishing render
    return (final: CheckboxProps, ...children: React.ReactNode[]) => {
      const { label, ...mergedProps } = mergeProps(Checkbox.props, final);

      return (
        <Slots.root {...mergedProps}>
          {Checkbox.state.boxAtEnd && <Slots.content key="content">{label}</Slots.content>}
          <Slots.checkbox>
            <Slots.checkmark key="checkmark" viewBox="0 0 11 8">
              <Path
                fill="currentColor"
                d="M10.2637 1.26367L4 7.5332L0.736328 4.26367L1.26367 3.73633L4 6.4668L9.73633 0.736328L10.2637 1.26367Z"
              />
            </Slots.checkmark>
          </Slots.checkbox>
          {!Checkbox.state.boxAtEnd && <Slots.content key="content">{label}</Slots.content>}
          {children}
        </Slots.root>
      );
    };
  },
});

export default Checkbox;
