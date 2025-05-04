import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { router } from './routes/router';
import { store } from 'data/redux/store';
import theme from './styles/theme';

function App() {
  try {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    );
  } catch (error) {
    return <div>Error loading application</div>;
  }
}

export default App;