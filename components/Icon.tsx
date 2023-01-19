interface IIconProps {
    type: string,
    width?: number | '',
    height?: number | '',
    fill?: string,
    className?: string,
}

export default function Icon({ type, width = '', height = '', fill = 'currentColor', className = '' }: IIconProps) {

    switch (type) {
        case 'logo':
            return (
                <svg width={width} height={height} className={className} viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="logo"><g><path d="M128,9.788c0,-5.402 -4.386,-9.788 -9.788,-9.788l-108.424,0c-5.402,0 -9.788,4.386 -9.788,9.788l0,108.424c0,5.402 4.386,9.788 9.788,9.788l108.424,0c5.402,0 9.788,-4.386 9.788,-9.788l0,-108.424Z" fill="#303aa5"/><path d="M7.961,112.175l0,-68.436c0,0 2.502,-11.265 9.727,-16.778c5.405,-4.125 10.119,-6.918 20.065,-7.159c10.811,-0.261 17.128,3.628 22.779,9.036c5.652,5.409 7.663,13.775 7.911,14.901c0.449,2.04 0,61.655 0,61.655l-14.797,6.781l0,-68.436c0,0 -1.843,-9.745 -7.691,-12.215c-5.847,-2.47 -12.366,-2.451 -16.287,0.516c-3.921,2.967 -7.046,8.322 -7.046,11.699c0,3.377 0,61.655 0,61.655l-14.661,6.781Z" fill="#fb3f1c"/><path d="M80.309,43.739l11.191,0.051l0.339,-19.362l10.034,-4.638l4.88,0l0,23.949l15.217,0l-4.51,10.096l-10.707,0l0,51.622l-14.914,6.718l0,-58.34l-15.497,0l3.967,-10.096Z" fill="#fb3f1c"/></g></g></svg>
            )
        case 'instagram':
            return (
                <svg width={width} height={width} className={className} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_784_233" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="17">
                        <path d="M0.988464 0.399414H17.0216V16.3994H0.988464V0.399414Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_784_233)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.00501 0.399414C6.82786 0.399414 6.55483 0.408623 5.69981 0.447556C4.84651 0.486394 4.26379 0.621643 3.75384 0.81942C3.22671 1.02383 2.77962 1.29738 2.33395 1.74212C1.88826 2.1869 1.61418 2.63304 1.40931 3.15908C1.21112 3.66797 1.07562 4.24949 1.03667 5.10103C0.997661 5.95431 0.988464 6.22671 0.988464 8.3994C0.988464 10.5721 0.997661 10.8445 1.03667 11.6978C1.07562 12.5493 1.21112 13.1309 1.40931 13.6397C1.61418 14.1658 1.88826 14.6119 2.33395 15.0567C2.77962 15.5015 3.22671 15.775 3.75384 15.9794C4.26379 16.1772 4.84651 16.3124 5.69981 16.3513C6.55483 16.3902 6.82786 16.3994 9.00501 16.3994C11.1822 16.3994 11.4552 16.3902 12.3102 16.3513C13.1635 16.3124 13.7462 16.1772 14.2562 15.9794C14.7833 15.775 15.2304 15.5015 15.6761 15.0567C16.1218 14.6119 16.3959 14.1658 16.6007 13.6397C16.7989 13.1309 16.9344 12.5493 16.9734 11.6978C17.0124 10.8445 17.0216 10.5721 17.0216 8.3994C17.0216 6.22675 17.0124 5.95431 16.9734 5.10103C16.9344 4.24949 16.7989 3.66797 16.6007 3.15908C16.3959 2.63304 16.1218 2.1869 15.6761 1.74212C15.2304 1.29738 14.7833 1.02383 14.2562 0.81942C13.7462 0.621643 13.1635 0.486394 12.3102 0.447556C11.4552 0.408623 11.1822 0.399414 9.00501 0.399414ZM9.00501 1.84085C11.1455 1.84085 11.3991 1.84898 12.2444 1.88747C13.026 1.92307 13.4505 2.0534 13.7329 2.16295C14.1071 2.30808 14.3742 2.48144 14.6547 2.76137C14.9352 3.04133 15.1089 3.30782 15.2544 3.68124C15.3642 3.96314 15.4948 4.38674 15.5304 5.16673C15.569 6.0103 15.5771 6.26333 15.5771 8.3994C15.5771 10.5355 15.569 10.7885 15.5304 11.6321C15.4948 12.4121 15.3642 12.8357 15.2544 13.1176C15.1089 13.491 14.9352 13.7575 14.6547 14.0374C14.3742 14.3174 14.1071 14.4908 13.7329 14.6359C13.4505 14.7454 13.026 14.8758 12.2444 14.9113C11.3992 14.9498 11.1457 14.958 9.00501 14.958C6.86433 14.958 6.61084 14.9498 5.76565 14.9113C4.98404 14.8758 4.55954 14.7454 4.27706 14.6359C3.9029 14.4908 3.63582 14.3174 3.35531 14.0374C3.0748 13.7575 2.90105 13.491 2.75562 13.1176C2.64587 12.8357 2.51527 12.4121 2.4796 11.6321C2.44103 10.7885 2.43289 10.5355 2.43289 8.3994C2.43289 6.26333 2.44103 6.0103 2.4796 5.16673C2.51527 4.38674 2.64587 3.96314 2.75562 3.68124C2.90105 3.30782 3.0748 3.04133 3.35531 2.7614C3.63582 2.48144 3.9029 2.30808 4.27706 2.16295C4.55954 2.0534 4.98404 1.92307 5.76562 1.88747C6.61096 1.84898 6.86449 1.84085 9.00501 1.84085Z" fill={fill}/>
                    </g>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00761 11.2528C7.43952 11.2528 6.1683 9.98156 6.1683 8.41346C6.1683 6.84537 7.43952 5.57418 9.00761 5.57418C10.5757 5.57418 11.8469 6.84537 11.8469 8.41346C11.8469 9.98156 10.5757 11.2528 9.00761 11.2528ZM9.00761 4.03943C6.59189 4.03943 4.63354 5.99774 4.63354 8.41346C4.63354 10.8292 6.59189 12.7875 9.00761 12.7875C11.4233 12.7875 13.3816 10.8292 13.3816 8.41346C13.3816 5.99774 11.4233 4.03943 9.00761 4.03943Z" fill={fill}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.1106 4.03943C14.1106 4.44206 13.7842 4.76844 13.3816 4.76844C12.979 4.76844 12.6526 4.44206 12.6526 4.03943C12.6526 3.6368 12.979 3.31042 13.3816 3.31042C13.7842 3.31042 14.1106 3.6368 14.1106 4.03943Z" fill={fill}/>
                </svg>
            )
        case 'linkedin':
            return (
                <svg width={width} height={height} className={className} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.425182 5.5299H3.54371V16.3984H0.425182V5.5299ZM1.90496 4.17045H1.88238C0.753497 4.17045 0.0216064 3.33961 0.0216064 2.28749C0.0216064 1.21386 0.775134 0.399414 1.92659 0.399414C3.07711 0.399414 3.78454 1.21181 3.80712 2.28442C3.80712 3.33654 3.07711 4.17045 1.90496 4.17045ZM16.0216 16.3994H12.4854V10.7741C12.4854 9.30196 11.9322 8.29799 10.7159 8.29799C9.78548 8.29799 9.26808 8.97516 9.02725 9.62979C8.93694 9.86337 8.95105 10.1902 8.95105 10.518V16.3994H5.44776C5.44776 16.3994 5.49291 6.43553 5.44776 5.5299H8.95105V7.23563C9.15801 6.48982 10.2775 5.42541 12.0639 5.42541C14.2803 5.42541 16.0216 6.98976 16.0216 10.3551V16.3994Z" fill={fill}/>
                </svg>
            )
        case 'twitter':
            return (
                <svg width={width} height={height} className={className} viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_784_241)">
                        <path d="M20.3852 2.29341C19.6361 2.61471 18.8308 2.83178 17.9858 2.92943C18.8483 2.42955 19.5108 1.63799 19.8227 0.694737C19.0154 1.1577 18.1213 1.49377 17.1696 1.67491C16.4076 0.889843 15.3218 0.399414 14.1202 0.399414C11.813 0.399414 9.94225 2.20786 9.94225 4.43852C9.94225 4.7551 9.97921 5.06342 10.0505 5.35904C6.57827 5.19061 3.49989 3.58248 1.43929 1.1387C1.07967 1.73525 0.873588 2.42906 0.873588 3.16933C0.873588 4.57073 1.61116 5.80704 2.73218 6.53136C2.04735 6.51039 1.40315 6.32867 0.839886 6.02617C0.839411 6.043 0.839411 6.05993 0.839411 6.07696C0.839411 8.03395 2.27953 9.66639 4.19076 10.0377C3.8402 10.13 3.47111 10.1794 3.0901 10.1794C2.8209 10.1794 2.55923 10.154 2.30407 10.1069C2.83577 11.7116 4.37862 12.8794 6.20687 12.9119C4.77703 13.9953 2.97566 14.6411 1.01821 14.6411C0.680982 14.6411 0.348444 14.6219 0.0216064 14.5846C1.87053 15.7307 4.06654 16.3994 6.42588 16.3994C14.1104 16.3994 18.3128 10.2446 18.3128 4.9068C18.3128 4.73167 18.3087 4.55753 18.3006 4.38418C19.1168 3.8148 19.8251 3.10347 20.3852 2.29341H20.3852Z" fill={fill}/>
                    </g>
                    <defs>
                        <clipPath id="clip0_784_241">
                            <rect width="20.3636" height="16" fill="white" transform="translate(0.0216064 0.399414)"/>
                        </clipPath>
                    </defs>
                </svg>
            )
        case 'mastodon':
            return (
                <svg width={width} height={height} className={className} viewBox="-10 -5 1034 1034" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <path fill={fill}
                d="M499 112q-93 1 -166 11q-81 11 -128 33l-14 8q-16 10 -32 25q-22 21 -38 47q-21 33 -32 73q-14 47 -14 103v37q0 77 1 119q3 113 18 188q19 95 62 154q50 67 134 89q109 29 210 24q46 -3 88 -12q30 -7 55 -17l19 -8l-4 -75l-22 6q-28 6 -57 10q-41 6 -78 4q-53 -1 -80 -7
                q-43 -8 -67 -30q-29 -25 -35 -72q-2 -14 -2 -29l25 6q31 6 65 10q48 7 93 9q42 2 92 -2q32 -2 88 -9t107 -30q49 -23 81.5 -54.5t38.5 -63.5q9 -45 13 -109q4 -46 5 -97v-41q0 -56 -14 -103q-11 -40 -32 -73q-16 -26 -38 -47q-15 -15 -32 -25q-12 -8 -14 -8
                q-46 -22 -127 -33q-74 -10 -166 -11h-3zM367 267q73 0 109 56l24 39l24 -39q36 -56 109 -56q63 0 101 43t38 117v239h-95v-232q0 -74 -61 -74q-69 0 -69 88v127h-94v-127q0 -88 -69 -88q-61 0 -61 74v232h-95v-239q0 -74 38 -117t101 -43z" />
                </svg>
            )
        default:
            return <></>
    }
}