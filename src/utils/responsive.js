import { useTheme, useMediaQuery } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    // Responsive values helper
    getValue: (mobile, tablet, desktop) => {
      if (isMobile) return mobile;
      if (isTablet) return tablet || mobile;
      return desktop || tablet || mobile;
    }
  };
};

// Responsive spacing helper
export const getResponsiveSpacing = (mobile = 1, tablet = 2, desktop = 3) => ({
  xs: mobile,
  sm: tablet,
  md: desktop,
});

// Responsive grid columns helper
export const getResponsiveColumns = (mobile = 1, tablet = 2, desktop = 3) => ({
  xs: `repeat(${mobile}, 1fr)`,
  sm: `repeat(${tablet}, 1fr)`,
  md: `repeat(${desktop}, 1fr)`,
});