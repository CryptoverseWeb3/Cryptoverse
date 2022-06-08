import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import {Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News} from './components';
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <div className={"app"}>
            <div className={"gradient-bg-welcome"}>
                <Navbar/>
            </div>

            <div className={"main"}>
                <Layout>
                    <div className="routes">
                        <BrowserRouter basename="/cryptoverse">
                            <Routes basename="/cryptoverse">
                                <Route exact path={"/"} element={<Homepage/>}/>
                                <Route exact path={"/exchanges"} element={<Exchanges/>}/>
                                <Route exact path={"/cryptocurrencies"} element={<Cryptocurrencies/>}/>
                                <Route exact path={"/crypto/:coinId"} element={<CryptoDetails/>}/>
                                <Route exact path={"/news"} element={<News/>}/>
                            </Routes>
                        </BrowserRouter>
                    </div>
                </Layout>
            </div>

            <div className={"gradient-bg-footer"}>
                <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                    Cryptoverse <br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/exchanges"}>Exchanges</Link>
                    <Link to={"/news"}>News</Link>
                </Space>
            </div>

        </div>
    );
}

export default App;
