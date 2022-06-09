import React from 'react';
import {Space, Typography} from "antd";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                Cryptoverse <br/>
                All rights reserved
            </Typography.Title>
            <Space>
                <Link className={"text-white"} to='/'>Home</Link>
                <Link className={"text-white"} to='/cryptocurrencies'>Cryptocurrencies</Link>
                <Link className={"text-white"} to='/news'>News</Link>
                <Link className={"text-white"} to='/Wallets'>Wallets</Link>
                <Link className={"text-white"} to='/Tutorials'>Tutorials</Link>
            </Space>
        </div>
    );
};

export default Footer;