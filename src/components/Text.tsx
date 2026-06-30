import {
  Text as NativeText,
  StyleProp,
  StyleSheet,
  TextProps as NativeTextProps,
  TextStyle,
} from 'react-native';

type TextColor = 'textPrimary' | 'textSecondary';
type TextFontSize = 'body' | 'subheading';
type TextFontWeight = 'normal' | 'bold';

interface TextProps extends NativeTextProps {
  color?: TextColor;
  fontSize?: TextFontSize;
  fontWeight?: TextFontWeight;
  style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  text: {
    color: '#24292e',
    fontSize: 14,
    fontWeight: '400',
  },
  textSecondary: {
    color: '#586069',
  },
  subheading: {
    fontSize: 16,
  },
  bold: {
    fontWeight: '700',
  },
});

const Text = ({
  color = 'textPrimary',
  fontSize = 'body',
  fontWeight = 'normal',
  style,
  ...props
}: TextProps) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.textSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
