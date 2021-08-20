import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BioNTech from './BioNTech';
import AstraZeneca from './AstraZeneca';
import Sinovac from './Sinovac';
import Sputnik from './Sputnik';
import Janssen from './Janssen';
import BioTech from './BioTech';
import Moderna from './Moderna';
import Novavax from './Novavax';
import NavBar from './NavBar';
import './App.css'

const App = () => {
    return (
        <div className="ui celled grid">
            <NavBar />
            <div className="row">
                <BrowserRouter>
                    <div className="three wide column">
                        <h2><Link to="/biontech">biontech</Link></h2>
                        <h2><Link to="/astrazeneca">astrazeneca</Link></h2>
                        <h2><Link to="/sinovac">sinovac</Link></h2>
                        <h2><Link to="/sputnik">sputnik</Link></h2>
                        <h2><Link to="/janssen">janssen</Link></h2>
                        <h2><Link to="/biotech">biotech</Link></h2>
                        <h2><Link to="/moderna">moderna</Link></h2>
                        <h2><Link to="/novavax">novavax</Link></h2>
                    </div>
                    <div className="thirteen wide column">
                        <Route path="/biontech" exact component={BioNTech} />
                        <Route path="/astrazeneca" exact component={AstraZeneca} />
                        <Route path="/sinovac" exact component={Sinovac} />
                        <Route path="/sputnik" exact component={Sputnik} />
                        <Route path="/janssen" exact component={Janssen} />
                        <Route path="/biotech" exact component={BioTech} />
                        <Route path="/moderna" exact component={Moderna} />
                        <Route path="/novavax" exact component={Novavax} />
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
};
export default App;