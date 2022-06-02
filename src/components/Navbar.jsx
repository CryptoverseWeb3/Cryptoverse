import React, {useState, useEffect} from 'react';
import {
    // Button,
    Menu, Typography, Avatar
} from 'antd';
import {Link} from 'react-router-dom';
import {
    HomeOutlined,
    // MoneyCollectOutlined,
    BulbOutlined, FundOutlined,
//     MenuOutlined
} from "@ant-design/icons";

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
    // const [activeMenu, setActiveMenu] = useState(true);
    // const [screenSize, setScreenSize] = useState(true);

    // useEffect(() => {
    //     const handleResize = () => setScreenSize(window.innerWidth);
    //     window.addEventListener('resize', handleResize)
    //
    //     handleResize();
    //
    //     return () => window.removeEventListener('resize', handleResize);
    // }, [])

    // useEffect(() => {
    //     if (screenSize < 768) {
    //         setActiveMenu(false);
    //     } else {
    //         setActiveMenu(true)
    //     }
    // }, [screenSize])

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
        // {
        //     key: 'exchanges', // it became paid that's why
        //     icon: <MoneyCollectOutlined />,
        //     label: (<Link to='/exchanges'>Exchanges</Link>),
        // },
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
                {/*<Button className={"menu-control-container"} onClick={() => setActiveMenu(!activeMenu)}>*/}
                {/*    <MenuOutlined/>*/}
                {/*</Button>*/}
            </div>

            <div className='menu'>
                <Menu theme={"dark"} mode="horizontal" defaultSelectedKeys='home'>
                    {items.map((ele) => (
                        <Menu.Item key={ele.key} icon={ele.icon}>{ele.label}</Menu.Item>
                    ))}
                </Menu>
            </div>


            {/*{activeMenu && (*/}
            {/*    <Menu theme={"dark"}>*/}
            {/*        <Menu.Item icon={<HomeOutlined/>}>*/}
            {/*            <Link to={"/"}>Home</Link>*/}
            {/*        </Menu.Item>*/}

            {/*        <Menu.Item icon={<FundOutlined/>}>*/}
            {/*            <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>*/}
            {/*        </Menu.Item>*/}

            {/*        <Menu.Item icon={<MoneyCollectOutlined/>}>*/}
            {/*            <Link to={"/exchanges"}>Exchanges</Link>*/}
            {/*        </Menu.Item>*/}

            {/*        <Menu.Item icon={<BulbOutlined/>}>*/}
            {/*            <Link to={"/news"}>News</Link>*/}
            {/*        </Menu.Item>*/}
            {/*    </Menu>*/}
            {/*)}*/}


        </div>
    )
}

export default Navbar;
