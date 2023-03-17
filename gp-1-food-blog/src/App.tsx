import './App.css';
import MainVirtual from './components/MainVirtual';
import Login from './components/Login';
import Detail from './components/Detail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogCard from './components/BlogCard';
import CRUDTool from './components/CRUDTool';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainVirtual />
      <BlogCard />
      <Login />
      <Detail />
      <CRUDTool />
      <Footer />
    </div>
  );
}

export default App;
