import { createRoot } from 'react-dom/client'
import { SidebarProvider } from './context/sidebarContext.jsx';
import { CoursesProvider } from './context/coursesContext.jsx';
import App from './App.jsx'
import { CartProvider } from './context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>
)
