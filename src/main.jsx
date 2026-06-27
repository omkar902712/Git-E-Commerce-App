import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

// Bootstrap 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

// redux 
import { Provider } from 'react-redux'
import { store } from './redux/store';

// Auth
import { AuthProvider } from './auth/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* Redux store available to whole app */}
    <Provider store={store}>

      {/* Authentication data available to whole app */}
      <AuthProvider>

        {/* Routing available to whole app */}
        <Router>
          <App />
        </Router>

      </AuthProvider>

    </Provider>

  </StrictMode>
);
