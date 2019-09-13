import { IButtonSettings } from './Button.types';
import { augmentPlatformTheme } from '@uifabric/theming-react-native';

export function loadButtonSettings(): void {
  const buttonSettings: { [key: string]: IButtonSettings } = {
    RNFButton: {
      root: {
        backgroundColor: 'buttonBackground',
        color: 'buttonText',
        borderColor: 'buttonBorder',
        borderWidth: 1,
        fontSize: 'large',
        fontWeight: 'semiBold',
        fontFamily: 'primary',
        horizontalAlign: 'center',
        verticalAlign: 'center',
        style: {
          boxSizing: 'border-box',
          borderRadius: 2,
          borderStyle: 'solid',
          borderWidth: 1,
          cursor: 'pointer',
          lineHeight: 1,
          display: 'inline-flex',
          alignItems: 'flex-start',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          minHeight: 32,
          minWidth: 100,
          overflow: 'hidden',
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 8,
          paddingRight: 8
        }
      },
      content: {},
      icon: {},
      _precedence: ['disabled', 'hovered', 'pressed', 'focused'],
      _overrides: {
        disabled: {
          root: {
            backgroundColor: 'buttonBackgroundDisabled',
            color: 'buttonTextDisabled',
            borderColor: 'buttonBorderDisabled'
          }
        },
        hovered: {
          root: {
            backgroundColor: 'buttonBackgroundHovered',
            color: 'buttonTextHovered',
            borderColor: 'buttonBorderHovered'
          }
        },
        pressed: {
          root: {
            backgroundColor: 'buttonBackgroundPressed',
            color: 'buttonTextPressed',
            borderColor: 'buttonBorderPressed'
          }
        },
        focused: {
          root: {
            borderColor: 'inputFocusBorderAlt'
          }
        }
      }
    }
  };
  augmentPlatformTheme({ settings: buttonSettings });
}