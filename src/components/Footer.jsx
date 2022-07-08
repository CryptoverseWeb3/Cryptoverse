import React from 'react';
import {
    Typography
} from "antd";

const Footer = () => {
    return (
        <div>
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                Cryptoverse <br/>
                All rights reserved
            </Typography.Title>

            <div className={"text-white md:flex list-none flex-row justify-between items-center  text-white-600 hover:text-blue-800 visited:text-white-600 text-2xl"}>
                <a className={"text-white"} href="https://twitter.com/CryptoverseWeb3">
                    <i className="social-icons ri-twitter-line"></i>
                </a>
                <a className={"text-white"} href="https://github.com/CryptoverseWeb3">
                    <i className="social-icons ri-github-fill"></i>
                </a>
                <a className={"text-white"} href="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg/?sub_confirmation=1">
                    <i className="social-icons ri-youtube-fill"></i>
                </a>
                <a className={"text-white"} href="https://instagram.com/CryptoverseWeb3">
                    <i className="social-icons ri-instagram-fill"></i>
                </a>
                <a className={"text-white"} href="https://discord.gg/WhDry9FWE7">
                    <i className="social-icons ri-discord-fill"></i>
                </a>
                <a className={"text-white"} href="https://t.me/cryptoverseweb3">
                    <i className="social-icons ri-telegram-line"></i>
                </a>
                <a className={"text-white"} href="https://www.facebook.com/cryptoverseweb3">
                    <i className="social-icons ri-facebook-fill"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;