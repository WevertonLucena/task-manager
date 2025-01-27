import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
}) => {
  const { theme } = useTheme();

  const getButtonStyles = () => {
    const baseStyle: ViewStyle = {
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    };

    const sizeStyles: Record<string, ViewStyle> = {
      small: {
        padding: 8,
        minWidth: 80,
      },
      medium: {
        padding: 12,
        minWidth: 120,
      },
      large: {
        padding: 16,
        minWidth: 160,
      },
    };

    const variantStyles: Record<string, ViewStyle> = {
      primary: {
        backgroundColor: theme.primaryColor,
      },
      secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.primaryColor,
      },
    };

    return [baseStyle, sizeStyles[size], variantStyles[variant], style];
  };

  const getTextStyles = () => {
    const baseStyle: TextStyle = {
      fontSize: 16,
      fontWeight: 'bold',
    };

    const sizeStyles: Record<string, TextStyle> = {
      small: {
        fontSize: 14,
      },
      medium: {
        fontSize: 16,
      },
      large: {
        fontSize: 18,
      },
    };

    const variantStyles: Record<string, TextStyle> = {
      primary: {
        color: theme.backgroundColor,
      },
      secondary: {
        color: theme.primaryColor,
      },
    };

    return [baseStyle, sizeStyles[size], variantStyles[variant], textStyle];
  };

  return (
    <TouchableOpacity style={getButtonStyles()} onPress={onPress}>
      <Text style={getTextStyles()}>{title}</Text>
    </TouchableOpacity>
  );
};
