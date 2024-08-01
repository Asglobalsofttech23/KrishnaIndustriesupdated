// import { createTheme } from '@mui/material/styles';

// // assets
// import colors from 'assets/scss/_themes-vars.module.scss';

// // project imports
// import componentStyleOverrides from './compStyleOverride';
// import themePalette from './palette';
// import themeTypography from './typography';

// /**
//  * Represent theme style and structure as per Material-UI
//  * @param {JsonObject} customization customization parameter object
//  */

// export const theme = (customization) => {
//   const color = colors;

//   const themeOption = {
//     colors: color,
//     heading: color.grey900,
//     paper: color.paper,
//     backgroundDefault: color.paper,
//     background: color.primaryLight,
//     darkTextPrimary: color.grey700,
//     darkTextSecondary: color.grey500,
//     textDark: color.grey900,
//     menuSelected: color.secondaryDark,
//     menuSelectedBack: color.secondaryLight,
//     divider: color.grey200,
//     customization
//   };

//   const themeOptions = {
//     direction: 'ltr',
//     palette: themePalette(themeOption),
//     mixins: {
//       toolbar: {
//         minHeight: '48px',
//         padding: '16px',
//         '@media (min-width: 600px)': {
//           minHeight: '48px'
//         }
//       }
//     },
//     typography: themeTypography(themeOption)
//   };

//   const themes = createTheme(themeOptions);
//   themes.components = componentStyleOverrides(themeOption);

//   return themes;
// };

// export default theme;



import { createTheme } from '@mui/material/styles';

// assets
import colors from 'assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
  const color = colors;

  // Define your custom colors here
  const darkSkyBlue = '#A9A9A9'; // Dark sky blue color

  // Define a clean and attractive color scheme
  const themeOption = {
    colors: color,
    heading: '#003366', // navy blue for headings
    paper: '#ffffff', // white for paper background
    backgroundDefault: '#e0f7fa', // sky blue for default background
    background: '#ffffff', // white for general background
    darkTextPrimary: '#003366', // navy blue for primary text
    darkTextSecondary: '#007bb2', // sky blue for secondary text
    textDark: '#003366', // navy blue for text
    menuSelected: '#007bb2', // sky blue for selected menu items
    menuSelectedBack: '#87ceeb', // navy blue for selected background
    divider: '#cccccc', // light grey for dividers
    customization,
    darkSkyBlue // Add the custom color to the theme options
  };

  const themeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    typography: themeTypography(themeOption)
  };

  const themes = createTheme(themeOptions);
  themes.components = componentStyleOverrides(themeOption);

  // Custom component styles
  themes.components.MuiPaper = {
    styleOverrides: {
      root: {
        backgroundColor: themeOption.paper, // background color
        color: themeOption.textDark // dark text color
      }
    }
  };

  themes.components.MuiTableCell = {
    styleOverrides: {
      head: {
        backgroundColor: darkSkyBlue, // dark sky blue for table head background
        color: themeOption.textDark, // dark text color
        fontWeight: 'bolder'
      },
      body: {
        color: themeOption.textDark // dark text color
      }
    }
  };

  themes.components.MuiButton = {
    styleOverrides: {
      root: {
        backgroundColor: themeOption.menuSelected, // sky blue for buttons
        color: '#ffffff', // white text color
        margin: '1px', // 1px margin for all buttons
        '&:hover': {
          backgroundColor: themeOption.menuSelectedBack, // navy blue for hover effect
          transition: 'background-color 0.3s', // smooth transition for hover effect
          color: '#003366',
        }
      }
    }
  };

  themes.components.MuiDialog = {
    styleOverrides: {
      paper: {
        backgroundColor: themeOption.paper, // background color
        color: themeOption.textDark // dark text color
      },
      // Override styles for dialog text
      root: {
        '& .MuiDialogContent-root': {
          color: themeOption.textDark // ensure text color is dark
        },
        '&:hover .MuiDialogContent-root': {
          color: themeOption.textDark // ensure text color remains dark on hover
        }
      }
    }
  };

  themes.components.MuiAppBar = {
    styleOverrides: {
      root: {
        backgroundColor: themeOption.menuSelected, // sky blue for the app bar
        color: themeOption.textDark // dark text color
      }
    }
  };

  themes.components.MuiDrawer = {
    styleOverrides: {
      paper: {
        backgroundColor: themeOption.backgroundDefault, // sky blue background for drawer
        color: themeOption.textDark // dark text color
      }
    }
  };

  themes.components.MuiTableRow = {
    styleOverrides: {
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#f0f0f0', // very light grey for odd rows
        },
        '&:hover': {
          backgroundColor: '#e0f7fa', // sky blue for hover effect
          transition: 'background-color 0.3s' // smooth transition for hover effect
        }
      }
    }
  };

  themes.components.MuiTableHead = {
    styleOverrides: {
      root: {
        backgroundColor: darkSkyBlue, // dark sky blue for table head background
        '& .MuiTableCell-root': {
          color: themeOption.textDark // dark text color for table head cells
        }
      }
    }
  };

  return themes;
};

export default theme;



