import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      disabled: string;
      text: string;
      error: string;
    };
    fonts: {
      primary: {
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
        black: string;
      };
      size: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
  }
}
