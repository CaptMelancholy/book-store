import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primary2: string;
      secondary: string;
      background_white: string;
      background_gray: string;
      background_light: string;
      red: string;
      orange: string;
      purple: string;
      blue: string;
      green: string;
    };
  }
}
