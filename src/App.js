import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from "./components";
import GlobalStyles from "./globalStyles";

const App = () => {
    return <Router>
        <GlobalStyles />
        <Navbar></Navbar>
    </Router>;
};

export default App;