import { createTheme, ThemeProvider } from '@mui/material'
import CssApp from './css-example/CssApp'

const theme = createTheme({ cssVariables: true });

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssApp />
    </ThemeProvider>
  )
}

export default App
