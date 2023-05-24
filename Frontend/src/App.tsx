import MainRoutes from './routes/MainRoutes';
import { store } from './app/common/store';
import { Provider as ReduxProvider } from 'react-redux';

function App() {
  return (
    // <ReduxProvider store={store}>
      <MainRoutes />
    // </ReduxProvider>
  )
}

export default App
