import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import queryClient from './config/react-query';
import { AuthProvider, SideBarProvider } from './contexts';
import AppRouter from './router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <SideBarProvider>
            <AppRouter />
          </SideBarProvider>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
