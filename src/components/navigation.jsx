import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import '../styles/App.css';
import Header from './header/header';
import Home from './home';
import Register from './register-data';
import FormValidation from './form-validation';

function Navigation() {

    return (
        <div className="App">
            <div className="page">
                <div className="content">

                    <Router>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/form-validation' element={<FormValidation />} />
                        </Routes>
                    </Router>

                </div>
            </div>
        </div>
    );
}

export default Navigation;