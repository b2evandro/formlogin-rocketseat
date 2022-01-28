import "styled-components";

declare module "style-componets" {
  export interface DefaultTheme {
    title: string;
    colors: {
      textBase: string;
      textTitle: string;
      background: string;
      formBackground: string;
      primaryColor: string;
    };
  }
}
