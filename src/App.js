import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
            <Route path='/ultra/services' exact component={Services} />
            <Route path='/ultra/products' exact component={Products} />
            <Route path='/ultra/sign-up' exact component={SignUp} />
            <Route path='/ultra' exact component={Home} />
            <Redirect to='/ultra' from='*' />
        </Switch>
        <Footer />
    </Router>;
};

export default App;