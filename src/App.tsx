import '@mantine/core/styles.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
// import { FaHome, FaCamera, FaPlaneDeparture } from 'react-icons/fa';
import { LinkWithIcon } from './components/LinkWithIcon';
import './App.css'
import Home from './pages/Home';
import Photography from './pages/Photography';

const Layout = () => {
  return ( 
    <div>
      <nav className="sticky-nav" style={{display:'flex', justifyContent:'center', gap:'2rem'}}>
        <LinkWithIcon to="/" label="Home" icon={<FaHome />} />
        {/* <LinkWithIcon to="/photography" label="Photography" icon={<FaCamera />} />
        <LinkWithIcon to="/photography" label="Travel" icon={<FaPlaneDeparture />} /> */}
      </nav>

      <main style={{ padding: '1rem', marginTop: '1rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "/photography", element: <Photography/> },
        { path: "*", element: <h1> 404 Not Found </h1> }
      ], 
  } 
])

function App() {
  return <RouterProvider router={router} />
}

export default App
