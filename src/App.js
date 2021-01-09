import logo from './logo.svg';
import './App.css';
import AppBar from './component/Appbar'
import { Button } from 'reactstrap';
import NavBar from './component/Navbar'
import Paginationx from './component/Pagination'
function App() {
    return (
        <div className='App'>
            <NavBar></NavBar>
            <div className='table'>
                <AppBar>
                </AppBar>
            </div>
        </div>
    );
}

export default App;
