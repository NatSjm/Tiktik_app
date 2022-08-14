import React from 'react';
import  { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, mt }: { items: string[], mt:boolean}) => (
    <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
        {items.map((item) => (
            <p key={item} className={'text-gray-400 tex-sm cursor-pointer hover:underline'}>
                {item}
            </p>
        ))}
    </div>
)
const Footer = () => (
    <div className={'mt-6 hidden xl:block'}>
        <List items={footerList1} mt={false}/>
        <List items={footerList2} mt/>
        <List items={footerList3} mt/>
        <p clssName={'text-gray-400 text-sm mt-5'}>2002 TikTi</p>
    </div>
);

export default Footer;
