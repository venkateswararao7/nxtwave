import React from 'react';
import Header from '../Header';
import "../Homepage/Homepage.css";
import { Homeoptions } from './Homeoptions';
import Search from './Search';
import CustomCard from "../CustomCard";

export const Homepage = () => {
    const icon = 'path/to/your/image.png';
    const text = 'Line One Text';
    const link = {
        text: 'Visit the Website',
        url: 'https://example.com',
    };
    return (
        <div className='HomePage'>
            <Header />
            <Homeoptions />
            <Search />
            <div className='card-container'>
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
                <CustomCard icon={icon} text={text} link={link} />
            </div>

        </div>
    )
}
