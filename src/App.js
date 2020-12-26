import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import GlobalStyles from './globalStyles';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import ScrollToTop from './ScrollToTop';

const App = () => {
    return <Router>
        <GlobalStyles />
        <ScrollToTop />
        <Navbar></Navbar>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        <Footer />
    </Router>;
};

export default App;