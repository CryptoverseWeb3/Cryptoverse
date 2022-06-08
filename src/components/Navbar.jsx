import React from 'react';

// import {Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
// import {HomeOutlined, BulbOutlined, FundOutlined,} from "@ant-design/icons";

// import icon from '../images/cryptocurrency.png';

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer text-white ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    // const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className={"w-full flex md:justify-center justify-between items-center p-4"}>



            <ul className={"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial" +
                "text-white-600 hover:text-blue-800 visited:text-white-600"}>

                {[
                    <Link to='/'>Home</Link>,
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>,
                    <Link to='/news'>News</Link>,
                    // <Link to='/Wallets'>Wallets</Link>,
                    // <Link to='/Tutorials'>Tutorials</Link>
                ].map((item, index) => (
                    <NavbarItem key={item + index} title={item}/>
                ))}


            </ul>

        </nav>
    );
};

export default Navbar;
