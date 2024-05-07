import localFont from 'next/font/local';


export const satoshi = localFont({
    variable: '--font-satoshi',
    src: [
        {
            path: './fonts/Satoshi/Satoshi-Bold.woff2',
            weight: '700',
            style: 'bold'
        },
        {
            path: './fonts/Satoshi/Satoshi-Medium.woff2',
            weight: '500',
            style: 'medium'
        },
        {
            path: './fonts/Satoshi/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
    ]
});

export const monument = localFont({
    variable: '--font-monument',
    src: './fonts/MonumentExtended/MonumentExtended-Regular.woff2',
    display: 'swap',
    style: 'normal'
});
