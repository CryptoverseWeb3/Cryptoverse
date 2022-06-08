import React from 'react';
import { Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {HomeOutlined,    BulbOutlined, FundOutlined,} from "@ant-design/icons";

import icon from '../images/cryptocurrency.png';

const Navbar1 = () => {

    const items = [
        {
            key: 'home',
            icon: <HomeOutlined/>,
            label: (<Link to='/'>Home</Link>),
        },
        {
            key: 'cryptocurrencies',
            icon: <FundOutlined/>,
            label: (<Link to='/cryptocurrencies'>Cryptocurrencies</Link>),
        },

        {
            key: 'news',
            icon: <BulbOutlined/>,
            label: (<Link to='/news'>News</Link>),
        },
    ]

    return (
        <div className={"nav-container"}>
            <div className={"logo-container"}>
                <Avatar src={icon} size={"large"}/>
                <Typography.Title level={2} className="logo">
                    <Link to={"/"}>Cryptoverse</Link>
                </Typography.Title>
            </div>

            <div className='menu'>
                <Menu theme={"dark"} mode="horizontal" defaultSelectedKeys='home'>
                    {items.map((ele) => (
                        <Menu.Item key={ele.key} icon={ele.icon}>{ele.label}</Menu.Item>
                    ))}
                </Menu>
            </div>
        </div>
    )
}

export default Navbar1;
