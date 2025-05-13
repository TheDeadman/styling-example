import { createTheme, ThemeProvider } from '@mui/material'
import CssApp from './css-example/CssApp'
import ScssApp from './scss-example/ScssApp'

const theme = createTheme({ cssVariables: true });

console.log("Theme", theme);

function App() {

  return (
    <ThemeProvider theme={theme}>
      {/* <CssApp /> */}
      <ScssApp />
    </ThemeProvider>
  )
}

export default App
