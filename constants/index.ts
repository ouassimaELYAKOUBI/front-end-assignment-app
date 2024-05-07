import telegram from "@/public/telegram.svg";
import discord from "@/public/discord.svg";
import twitter from "@/public/twitter.svg";
import icon1 from "@/public/1.svg";
import icon2 from "@/public/2.svg";
import icon3 from "@/public/3.svg";
import icon4 from "@/public/4.svg";
export const NAV_LINKS = [
    { href: "/", key: 'creonPass', label: 'Creon Pass',available:''},
    { href: "/", key: 'token', label: 'Token',available:'soon'},
    { href: "/", key: 'aiRevenue', label: 'AI Revenue',available:'soon'},
    { href: "/", key: 'aiLaunchpad', label: 'AI Launchpad',available:'soon'},
];
export  const SOCIAL_MEDIA = [
    {img:telegram},
    {img:discord},
    {img: twitter}
  ]
export const creonPass = [
    { label:'Pre-launch investment opportunities for upcoming AI projects'},
    { label: 'Free and early access to Creon built AI projects'},
    { label: 'Higher allocation limits on the Creon AI Launchpad'},
    { label: 'Revenue share distribution from Creon built AI projects'}
]
export const missions =[
    {
        title: 'Profitability and Growth',
        description:'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        icon:icon1,
    },
    {
        title: 'Transparent & Fair Decentralized Earnings',
        description:'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        icon:icon2,
    },
    {
        title: 'Launching the future',
        description:'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        icon:icon3,
    },
    {
        title: 'Limitless Possibilities of AI & Crypto',
        description:'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        icon:icon4,
    }
]
