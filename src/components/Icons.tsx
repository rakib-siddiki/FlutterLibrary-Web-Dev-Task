import { LucideProps, Moon, SunMedium } from 'lucide-react';

export const Icons = {
    Moon,
    SunMedium,
    EmptyBox: (props: LucideProps) => (
        <svg
            {...props}
            viewBox='0 0 1024 1024'
            width='17'
            height='20'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M743.68 176.61952h-448l-220.16 240.52736v345.6c0 56.54528 45.85472 102.4 102.4 102.4h683.52c56.54528 0 102.4-45.85472 102.4-102.4v-345.6l-220.16-240.52736z m-416.43008 71.68h384.8704l176.52736 192.8704h-193.87392c0 0.28672 0.04096 0.57344 0.04096 0.84992 0 94.57664-76.94336 171.52-171.52 171.52-94.5664 0-171.52-76.94336-171.52-171.52 0-0.27648 0.04096-0.5632 0.0512-0.84992h-201.12384l176.54784-192.8704z m534.19008 545.16736h-683.52c-16.93696 0-30.72-13.78304-30.72-30.72v-249.89696h143.4112c30.33088 99.75808 123.02336 172.36992 232.69376 172.36992 109.68064 0 202.36288-72.61184 232.69376-172.36992h136.17152v249.89696a30.7712 30.7712 0 0 1-30.73024 30.72z'
                fill='inherite'
            />
        </svg>
    ),
    Descover: (props: LucideProps) => (
        <svg
            {...props}
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.97452 0.666626H9.02552C10.2667 0.666626 11.2328 0.666618 12.0102 0.724034C12.7991 0.782301 13.4431 0.902184 14.0299 1.16802C15.2729 1.73123 16.2688 2.72712 16.8319 3.97015C17.0978 4.55686 17.2177 5.20083 17.2759 5.9898C17.3334 6.76717 17.3334 7.73329 17.3334 8.97446V9.02546C17.3334 10.2666 17.3334 11.2327 17.2759 12.0101C17.2177 12.799 17.0978 13.443 16.8319 14.0298C16.2688 15.2728 15.2729 16.2687 14.0299 16.8319C13.4431 17.0977 12.7991 17.2176 12.0102 17.2759C11.2328 17.3333 10.2667 17.3333 9.02552 17.3333H8.97452C7.73335 17.3333 6.76723 17.3333 5.98986 17.2759C5.2009 17.2176 4.55691 17.0977 3.97021 16.8319C2.72718 16.2687 1.73129 15.2728 1.16808 14.0298C0.902245 13.443 0.782362 12.799 0.724095 12.0101C0.666679 11.2327 0.666687 10.2666 0.666687 9.02546V8.97446C0.666687 7.73329 0.666679 6.76718 0.724095 5.9898C0.782362 5.20083 0.902245 4.55685 1.16808 3.97015C1.73129 2.72712 2.72718 1.73123 3.97021 1.16802C4.55692 0.902184 5.2009 0.782301 5.98986 0.724034C6.76724 0.666618 7.73335 0.666626 8.97452 0.666626ZM6.08193 1.97063C5.36224 2.02379 4.88303 2.12675 4.4861 2.30659C3.5193 2.74465 2.74471 3.51923 2.30666 4.48603C2.14462 4.84365 2.045 5.26807 1.98799 5.87496H8.37502V1.91693C7.41769 1.91833 6.68322 1.92623 6.08193 1.97063ZM9.62502 1.91693V5.87496H16.012C15.955 5.26807 15.8554 4.84366 15.6934 4.48603C15.2554 3.51923 14.4808 2.74465 13.5139 2.3066C13.117 2.12675 12.6378 2.02379 11.9181 1.97064C11.3169 1.92623 10.5824 1.91833 9.62502 1.91693ZM16.0729 7.12496H9.62502V10.875H16.0729C16.0832 10.3463 16.0834 9.73129 16.0834 8.99996C16.0834 8.26863 16.0832 7.65363 16.0729 7.12496ZM16.012 12.125H9.62502V16.083C10.5824 16.0816 11.3169 16.0737 11.9181 16.0293C12.6378 15.9761 13.117 15.8732 13.5139 15.6933C14.4808 15.2553 15.2554 14.4807 15.6934 13.5139C15.8554 13.1563 15.955 12.7319 16.012 12.125ZM8.37502 16.083V12.125H1.98799C2.045 12.7319 2.14462 13.1563 2.30665 13.5139C2.74471 14.4807 3.5193 15.2553 4.4861 15.6933C4.88303 15.8732 5.36224 15.9761 6.08193 16.0293C6.68322 16.0737 7.41769 16.0816 8.37502 16.083ZM1.92712 10.875H8.37502V7.12496H1.92712C1.91682 7.65363 1.91669 8.26863 1.91669 8.99996C1.91669 9.73129 1.91682 10.3463 1.92712 10.875Z'
                fill='currentColor'
            />
        </svg>
    ),
    UIkit: (props: LucideProps) => (
        <svg
            {...props}
            width='14'
            height='18'
            viewBox='0 0 14 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.86193 0.666626H7.13827C8.04843 0.666618 8.76968 0.666618 9.35102 0.714118C9.94552 0.762684 10.4485 0.864026 10.9078 1.09806C11.6526 1.47756 12.2582 2.08311 12.6377 2.82792C12.8717 3.28723 12.973 3.79025 13.0216 4.38473C13.0691 4.96608 13.0691 5.68733 13.0691 6.59744V11.4025C13.0691 12.3126 13.0691 13.0338 13.0216 13.6152C12.973 14.2097 12.8717 14.7127 12.6377 15.172C12.2582 15.9168 11.6526 16.5224 10.9078 16.9019C10.4485 17.1359 9.94552 17.2372 9.35102 17.2858C8.76968 17.3333 8.04843 17.3333 7.13827 17.3333H6.86193C5.95177 17.3333 5.23055 17.3333 4.6492 17.2858C4.05471 17.2372 3.55168 17.1359 3.09237 16.9019C2.34757 16.5224 1.74202 15.9168 1.36252 15.172C1.12849 14.7127 1.02715 14.2097 0.978575 13.6152C0.931075 13.0338 0.931083 12.3125 0.931092 11.4025V6.59746C0.931083 5.68734 0.931083 4.96609 0.978575 4.38473C1.02715 3.79024 1.12849 3.28723 1.36252 2.82791C1.74202 2.08311 2.34757 1.47756 3.09237 1.09806C3.55169 0.864026 4.05471 0.762684 4.6492 0.714118C5.23055 0.666618 5.95177 0.666618 6.86193 0.666626ZM4.75099 1.95997C4.2338 2.00222 3.91359 2.08253 3.65987 2.21182C3.15026 2.47148 2.73593 2.88579 2.47627 3.3954C2.347 3.64913 2.26668 3.96933 2.22442 4.48653C2.18157 5.01102 2.18109 5.68123 2.18109 6.62496V11.375C2.18109 12.3187 2.18157 12.9889 2.22442 13.5134C2.26668 14.0305 2.347 14.3508 2.47627 14.6045C2.73593 15.1141 3.15026 15.5285 3.65987 15.7881C3.91359 15.9174 4.2338 15.9977 4.75099 16.04C5.27548 16.0828 5.94568 16.0833 6.88943 16.0833H7.11077C8.05452 16.0833 8.72468 16.0828 9.24918 16.04C9.76643 15.9977 10.0866 15.9174 10.3403 15.7881C10.8499 15.5285 11.2643 15.1141 11.5239 14.6045C11.6532 14.3508 11.7335 14.0305 11.7758 13.5134C11.8186 12.9889 11.8191 12.3187 11.8191 11.375V6.62496C11.8191 5.68123 11.8186 5.01102 11.7758 4.48653C11.7335 3.96933 11.6532 3.64913 11.5239 3.3954C11.2643 2.88579 10.8499 2.47148 10.3403 2.21182C10.0866 2.08253 9.76643 2.00222 9.24918 1.95997C8.72468 1.91711 8.05452 1.91663 7.11077 1.91663H6.88943C5.94568 1.91663 5.27548 1.91711 4.75099 1.95997ZM5.21885 3.41142C5.21885 3.06624 5.49868 2.78642 5.84385 2.78642H8.15635C8.50152 2.78642 8.78135 3.06624 8.78135 3.41142C8.78135 3.75659 8.50152 4.03642 8.15635 4.03642H5.84385C5.49868 4.03642 5.21885 3.75659 5.21885 3.41142ZM7.0001 13.8671C7.34527 13.8671 7.6251 14.147 7.6251 14.4921V14.5162C7.6251 14.8614 7.34527 15.1412 7.0001 15.1412C6.65493 15.1412 6.3751 14.8614 6.3751 14.5162V14.4921C6.3751 14.147 6.65493 13.8671 7.0001 13.8671Z'
                fill='currentColor'
            />
        </svg>
    ),
    Screens: (props: LucideProps) => (
        <svg
            {...props}
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.97452 0.666626H9.02552C10.2667 0.666626 11.2328 0.666618 12.0102 0.724034C12.7991 0.782301 13.4431 0.902184 14.0299 1.16802C15.2729 1.73123 16.2688 2.72712 16.8319 3.97015C17.0978 4.55686 17.2177 5.20083 17.2759 5.9898C17.3334 6.76717 17.3334 7.73329 17.3334 8.97446V9.02546C17.3334 10.2666 17.3334 11.2327 17.2759 12.0101C17.2177 12.799 17.0978 13.443 16.8319 14.0298C16.2688 15.2728 15.2729 16.2687 14.0299 16.8319C13.4431 17.0977 12.7991 17.2176 12.0102 17.2759C11.2328 17.3333 10.2667 17.3333 9.02552 17.3333H8.97452C7.73335 17.3333 6.76723 17.3333 5.98986 17.2759C5.2009 17.2176 4.55691 17.0977 3.97021 16.8319C2.72718 16.2687 1.73129 15.2728 1.16808 14.0298C0.902245 13.443 0.782362 12.799 0.724095 12.0101C0.666679 11.2327 0.666687 10.2666 0.666687 9.02546V8.97446C0.666687 7.73329 0.666679 6.76718 0.724095 5.9898C0.782362 5.20083 0.902245 4.55685 1.16808 3.97015C1.73129 2.72712 2.72718 1.73123 3.97021 1.16802C4.55692 0.902184 5.2009 0.782301 5.98986 0.724034C6.76724 0.666618 7.73335 0.666626 8.97452 0.666626ZM5.87502 1.98793C5.26813 2.04493 4.84372 2.14456 4.4861 2.30659C3.5193 2.74465 2.74471 3.51923 2.30666 4.48603C2.12681 4.88297 2.02385 5.36218 1.9707 6.08187C1.91709 6.80783 1.91669 7.72796 1.91669 8.99996C1.91669 10.272 1.91709 11.192 1.9707 11.918C2.02385 12.6377 2.12681 13.117 2.30665 13.5139C2.74471 14.4807 3.5193 15.2553 4.4861 15.6933C4.84371 15.8554 5.26812 15.955 5.87502 16.012V1.98793ZM7.12502 1.92706V8.47913H10.875V1.92706C10.3464 1.91676 9.73135 1.91663 9.00002 1.91663C8.26869 1.91663 7.65369 1.91676 7.12502 1.92706ZM12.125 1.98793V16.012C12.7319 15.955 13.1564 15.8554 13.5139 15.6933C14.4808 15.2553 15.2554 14.4807 15.6934 13.5139C15.8733 13.117 15.9762 12.6377 16.0294 11.918C16.0829 11.192 16.0834 10.272 16.0834 8.99996C16.0834 7.72796 16.0829 6.80783 16.0294 6.08187C15.9762 5.36218 15.8733 4.88297 15.6934 4.48603C15.2554 3.51923 14.4808 2.74465 13.5139 2.3066C13.1564 2.14456 12.7319 2.04493 12.125 1.98793ZM10.875 16.0729V9.72913H7.12502V16.0729C7.65369 16.0831 8.26869 16.0833 9.00002 16.0833C9.73135 16.0833 10.3464 16.0831 10.875 16.0729Z'
                fill='currentColor'
            />
        </svg>
    ),
    CodeBlock: (props: LucideProps) => (
        <svg
            {...props}
            width='18'
            height='14'
            viewBox='0 0 18 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.6889 0.748247C11.0221 0.838305 11.2192 1.18144 11.1291 1.51466L8.07598 12.8114C7.9859 13.1447 7.64282 13.3417 7.30956 13.2517C6.97633 13.1617 6.77922 12.8185 6.86927 12.4852L9.92248 1.18853C10.0125 0.855305 10.3556 0.65818 10.6889 0.748247ZM12.508 3.13874C12.7416 2.88465 13.137 2.86806 13.3911 3.1017L17.1302 6.53982C17.259 6.65824 17.3322 6.82507 17.3322 6.99991C17.3322 7.17482 17.259 7.34166 17.1302 7.45999L13.3911 10.8982C13.137 11.1317 12.7416 11.1152 12.508 10.8611C12.2743 10.607 12.2909 10.2117 12.545 9.97799L15.7838 6.99991L12.545 4.02185C12.2909 3.78821 12.2743 3.39283 12.508 3.13874ZM5.49012 3.13886C5.72375 3.39295 5.70717 3.78832 5.45307 4.02196L2.21423 6.99999L5.45307 9.97807C5.70717 10.2117 5.72375 10.6071 5.49012 10.8612C5.25648 11.1153 4.8611 11.1319 4.60701 10.8982L0.867799 7.46007C0.739083 7.34174 0.665833 7.17491 0.665833 6.99999C0.665833 6.82516 0.739091 6.65832 0.867808 6.53991L4.60701 3.1018C4.8611 2.86817 5.25648 2.88476 5.49012 3.13886Z'
                fill='currentColor'
            />
        </svg>
    ),
    SponserBox: (props: LucideProps) => (
        <svg
            {...props}
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.97452 0.666626H9.02552C10.2667 0.666626 11.2328 0.666618 12.0102 0.724034C12.7991 0.782301 13.4431 0.902184 14.0299 1.16802C15.2729 1.73123 16.2688 2.72712 16.8319 3.97015C17.0978 4.55686 17.2177 5.20083 17.2759 5.9898C17.3334 6.76717 17.3334 7.73329 17.3334 8.97446V9.02546C17.3334 10.2666 17.3334 11.2327 17.2759 12.0101C17.2177 12.799 17.0978 13.443 16.8319 14.0298C16.2688 15.2728 15.2729 16.2687 14.0299 16.8319C13.4431 17.0977 12.7991 17.2176 12.0102 17.2759C11.2328 17.3333 10.2667 17.3333 9.02552 17.3333H8.97452C7.73335 17.3333 6.76723 17.3333 5.98986 17.2759C5.2009 17.2176 4.55691 17.0977 3.97021 16.8319C2.72718 16.2687 1.73129 15.2728 1.16808 14.0298C0.902245 13.443 0.782362 12.799 0.724095 12.0101C0.666679 11.2327 0.666687 10.2666 0.666687 9.02546V8.97446C0.666687 7.73329 0.666679 6.76718 0.724095 5.9898C0.782362 5.20083 0.902245 4.55685 1.16808 3.97015C1.73129 2.72712 2.72718 1.73123 3.97021 1.16802C4.55692 0.902184 5.2009 0.782301 5.98986 0.724034C6.76724 0.666618 7.73335 0.666626 8.97452 0.666626ZM6.08193 1.97063C5.36224 2.02379 4.88303 2.12675 4.4861 2.30659C3.5193 2.74465 2.74471 3.51923 2.30666 4.48603C2.12681 4.88297 2.02385 5.36218 1.9707 6.08187C1.91709 6.80783 1.91669 7.72796 1.91669 8.99996C1.91669 10.272 1.91709 11.192 1.9707 11.918C2.02385 12.6377 2.12681 13.117 2.30665 13.5139C2.74471 14.4807 3.5193 15.2553 4.4861 15.6933C4.88303 15.8732 5.36224 15.9761 6.08193 16.0293C6.8079 16.0829 7.72802 16.0833 9.00002 16.0833C10.272 16.0833 11.1921 16.0829 11.9181 16.0293C12.6378 15.9761 13.117 15.8732 13.5139 15.6933C14.4808 15.2553 15.2554 14.4807 15.6934 13.5139C15.8733 13.117 15.9762 12.6377 16.0294 11.918C16.0829 11.192 16.0834 10.272 16.0834 8.99996C16.0834 7.72796 16.0829 6.80783 16.0294 6.08187C15.9762 5.36218 15.8733 4.88297 15.6934 4.48603C15.2554 3.51923 14.4808 2.74465 13.5139 2.3066C13.117 2.12675 12.6378 2.02379 11.9181 1.97064C11.1921 1.91703 10.272 1.91663 9.00002 1.91663C7.72802 1.91663 6.8079 1.91703 6.08193 1.97063ZM12.5375 5.46251C12.2541 5.17911 11.7947 5.17911 11.5113 5.46251L11.3203 5.65353C11.203 5.77073 11.0441 5.83658 10.8783 5.83658C10.7125 5.83658 10.5536 5.77073 10.4364 5.65353L10.2454 5.46251C9.96194 5.17911 9.50252 5.17911 9.2191 5.46251C8.93569 5.74591 8.93569 6.20538 9.2191 6.48878L10.8784 8.14804L12.5375 6.48878C12.8209 6.20538 12.8209 5.74592 12.5375 5.46251ZM10.8783 4.36598C11.6499 3.81515 12.7289 3.88603 13.4214 4.57863C14.193 5.35019 14.1929 6.60112 13.4214 7.37271L11.3203 9.47388C11.203 9.59104 11.0441 9.65688 10.8784 9.65688C10.7125 9.65688 10.5536 9.59104 10.4364 9.47388L8.33519 7.37271C7.5636 6.6011 7.56369 5.35018 8.33519 4.57863C9.02777 3.88604 10.1067 3.81514 10.8783 4.36598Z'
                fill='currentColor'
            />
        </svg>
    ),
    Pepole: (props: LucideProps) => (
        <svg
            {...props}
            width='18'
            height='12'
            viewBox='0 0 18 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.03177 1.96753C5.1455 1.96753 4.42703 2.686 4.42703 3.57226C4.42703 4.45852 5.1455 5.17702 6.03177 5.17702C6.91803 5.17702 7.63652 4.45852 7.63652 3.57226C7.63652 2.686 6.91803 1.96753 6.03177 1.96753ZM3.17703 3.57226C3.17703 1.99564 4.45514 0.717529 6.03177 0.717529C7.60836 0.717529 8.88652 1.99564 8.88652 3.57226C8.88652 5.14885 7.60836 6.42702 6.03177 6.42702C4.45514 6.42702 3.17703 5.14885 3.17703 3.57226ZM12.1856 1.96753C11.2994 1.96753 10.5809 2.686 10.5809 3.57226C10.5809 4.45852 11.2994 5.17702 12.1856 5.17702C13.0719 5.17702 13.7904 4.45852 13.7904 3.57226C13.7904 2.686 13.0719 1.96753 12.1856 1.96753ZM9.33086 3.57226C9.33086 1.99564 10.6089 0.717529 12.1856 0.717529C13.7622 0.717529 15.0404 1.99564 15.0404 3.57226C15.0404 5.14885 13.7622 6.42702 12.1856 6.42702C10.6089 6.42702 9.33086 5.14885 9.33086 3.57226ZM5.92329 8.12802C4.08367 8.12802 2.5093 9.27019 1.87346 10.8863C1.74709 11.2075 1.38425 11.3654 1.06303 11.239C0.741823 11.1127 0.583873 10.7499 0.710248 10.4286C1.52781 8.35061 3.55282 6.87802 5.92329 6.87802C7.06008 6.87802 8.11744 7.21669 9.00027 7.79844C9.88336 7.21677 10.9414 6.87802 12.0771 6.87802C14.4476 6.87802 16.4726 8.35061 17.2902 10.4286C17.4165 10.7499 17.2586 11.1127 16.9374 11.2391C16.6162 11.3654 16.2534 11.2075 16.1269 10.8863C15.4911 9.27019 13.9167 8.12802 12.0771 8.12802C11.3284 8.12802 10.6247 8.31677 10.01 8.64944C10.4901 9.16177 10.8749 9.76427 11.1364 10.4286C11.2627 10.7499 11.1048 11.1127 10.7835 11.239C10.4624 11.3654 10.0995 11.2075 9.97311 10.8863C9.33727 9.27019 7.76294 8.12802 5.92329 8.12802Z'
                fill='currentColor'
            />
        </svg>
    )
};
