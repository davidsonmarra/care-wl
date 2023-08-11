import {WhiteLabelConfig} from '@modules';

export const theme = {
  ...WhiteLabelConfig.THEME,
  fonts: {
    primary: {
      regular: 'Inter-Regular',
      medium: 'Inter-Medium',
      semiBold: 'Inter-SemiBold',
      bold: 'Inter-Bold',
      black: 'Inter-Black',
    },
    size: {
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
    },
  },
};
