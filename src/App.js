import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import {Navbar} from './components';
import './App.css';

const App = () => {
    return (
        <div className={"app"}>
            <div className={"navbar"}>
                <Navbar/>
            </div>

            <div className={"main"}>
<<<<<<< Updated upstream

            </div>

            <div className={"footer"}>
=======
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path={"/"} element={<Homepage/>}/>
                            <Route exact path={"/exchanges"} element={<Exchanges/>}/>
                            <Route exact path={"/cryptocurrencies"} element={<Cryptocurrencies/>}/>
                            <Route exact path={"/crypto/:coinId"} element={<CryptoDetails/>}/>
                            <Route exact path={"/news"} element={<News/>}/>
                        </Routes>
                    </div>
                </Layout>
>>>>>>> Stashed changes

                <div className={"footer"}>
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

        </div>
    );
}

export default App;
