import { AppProvider } from './provider';

/**
 * Main App component with routing and code splitting
 * Implements lazy loading for all pages to improve initial load performance
 */
function App() {
  return <AppProvider />;
}

export default App;