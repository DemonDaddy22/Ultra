import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import GlobalStyles from './globalStyles';

const App = () => {
    return <Router>
        <GlobalStyles />
        <Navbar></Navbar>
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
    </Router>;
};

export default App;