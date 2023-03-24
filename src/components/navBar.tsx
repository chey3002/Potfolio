import React from 'react'

export default function NavBar() {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-20 h-screen transition-transform"
            aria-label="Sidebar"
        >
            <nav className="h-full bg-asideColor w-20  justify-between flex flex-col ">
                <div className="mt-10 mb-10">
                    <a href="#">
                        <img
                            alt='My logo'
                            src="https://i.imgur.com/FjqhO9z.jpg"
                            className="rounded-md w-10 h-10 mb-3 mx-auto"
                        />
                    </a>
                    <div className="mt-10">
                        <ul>
                            <li className="group mb-6">
                                <a
                                    href="#Experience"
                                    data-te-toggle="tooltip"
                                    data-te-placement="right"
                                    data-te-ripple-init
                                    title="Experience and Education"
                                >
                                    <span>
                                        <svg
                                            className="drop-shadow-neonPinkGlow fill-current h-7 w-7 text-neonPink mx-auto hover:text-white "
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g><polygon points="12.955 0 12.955 1.52 9.905 1.52 9.905 3.05 12.955 3.05 12.955 4.57 14.475 4.57 14.475 3.05 17.525 3.05 17.525 4.57 19.045 4.57 19.045 3.05 22.095 3.05 22.095 4.57 23.625 4.57 23.625 3.05 25.145 3.05 25.145 6.1 26.665 6.1 26.665 4.57 28.195 4.57 28.195 30.48 11.435 30.48 11.435 32 29.715 32 29.715 30.48 31.235 30.48 31.235 4.57 29.715 4.57 29.715 3.05 28.195 3.05 28.195 1.52 23.625 1.52 23.625 0 22.095 0 22.095 1.52 19.045 1.52 19.045 0 17.525 0 17.525 1.52 14.475 1.52 14.475 0 12.955 0" ></polygon><rect x="23.625" y="6.1" width="1.52" height="3.04" ></rect><polygon points="22.095 12.19 26.665 12.19 26.665 10.67 23.625 10.67 23.625 9.14 22.095 9.14 22.095 12.19" ></polygon><polygon points="20.575 15.24 19.045 15.24 19.045 18.29 20.575 18.29 20.575 16.76 26.665 16.76 26.665 15.24 22.095 15.24 22.095 12.19 20.575 12.19 20.575 15.24" ></polygon><polygon points="17.525 21.33 26.665 21.33 26.665 19.81 19.045 19.81 19.045 18.29 17.525 18.29 17.525 21.33" ></polygon><rect x="16.005" y="12.19" width="1.52" height="1.53" ></rect><rect x="16.005" y="9.14" width="1.52" height="1.53" ></rect><rect x="12.955" y="24.38" width="13.71" height="1.53" ></rect><rect x="11.435" y="13.72" width="4.57" height="1.52" ></rect><rect x="11.435" y="9.14" width="1.52" height="1.53" ></rect><polygon points="11.435 22.86 17.525 22.86 17.525 21.33 2.285 21.33 2.285 22.86 9.905 22.86 9.905 30.48 11.435 30.48 11.435 22.86" ></polygon><rect x="9.905" y="12.19" width="1.53" height="1.53" ></rect><rect x="8.385" y="3.05" width="1.52" height="3.05" ></rect><rect x="6.855" y="6.1" width="1.53" height="3.04" ></rect><rect x="5.335" y="9.14" width="1.52" height="3.05" ></rect><rect x="3.815" y="12.19" width="1.52" height="3.05" ></rect><rect x="2.285" y="15.24" width="1.53" height="3.05"></rect><rect x="0.765" y="18.29" width="1.52" height="3.04" ></rect></g>
                                        </svg>
                                    </span>
                                </a>

                            </li>
                            <li className="mb-6">
                                <a href="#Projects"
                                    data-te-toggle="tooltip"
                                    data-te-placement="right"
                                    data-te-ripple-init
                                    title="Projects"
                                >
                                    <span>
                                        <svg
                                            className="drop-shadow-neonPinkGlow fill-current h-7 w-7 text-neonPink mx-auto hover:text-white "
                                            viewBox="0 0 32 32"
                                        >
                                            <g><path d="M28.96,6.1V0H13.72V1.52H7.62V3.05H3.05V13.72H1.53v3.04H0V32H32V6.1ZM7.62,30.48H1.53V21.33H7.62Zm0-10.67H4.58V4.57H7.62ZM9.15,3.05h4.57V4.57H10.67V19.81H9.15ZM13.72,6.1V19.81H12.2V6.1Zm1.52,24.38H9.15V21.33h6.09Zm15.24,0H16.77V19.81H15.24V1.52H27.43V6.1H22.86V7.62h7.62Z" ></path><rect x="25.91" y="21.33" width="1.52" height="1.53" ></rect><rect x="25.91" y="18.29" width="1.52" height="1.52" ></rect><rect x="22.86" y="22.86" width="3.05" height="1.52" ></rect><rect x="21.34" y="21.33" width="1.52" height="1.53" ></rect><rect x="21.34" y="18.29" width="1.52" height="1.52" ></rect><rect x="21.34" y="7.62" width="1.52" height="3.05" ></rect><rect x="19.81" y="10.67" width="1.53" height="3.05" ></rect><rect x="18.29" y="13.72" width="1.52" height="3.04" ></rect><rect x="18.29" y="3.05" width="1.52" height="1.52" ></rect><rect x="16.77" y="16.76" width="1.52" height="3.05" ></rect><rect x="10.67" y="24.38" width="3.05" height="3.05" ></rect><rect x="3.05" y="24.38" width="3.05" height="3.05" ></rect></g>                                            </svg>
                                    </span>
                                </a>
                            </li>
                            <li className="mb-6">
                                <a href="#About"
                                    data-te-toggle="tooltip"
                                    data-te-placement="right"
                                    data-te-ripple-init
                                    title="About me"
                                >
                                    <span>
                                        <svg
                                            className="drop-shadow-neonPinkGlow fill-current h-7 w-7 text-neonPink mx-auto hover:text-white "
                                            viewBox="0 0 32 32"
                                        >
                                            <g><rect x="29.71" y="19.81" width="1.53" height="4.57" ></rect><polygon points="29.71 0 28.19 0 28.19 1.52 26.66 1.52 26.66 3.05 28.19 3.05 28.19 4.57 29.71 4.57 29.71 3.05 31.24 3.05 31.24 1.52 29.71 1.52 29.71 0" ></polygon><rect x="28.19" y="10.67" width="1.52" height="9.14" ></rect><rect x="26.66" y="24.38" width="3.05" height="1.52" ></rect><rect x="26.66" y="7.62" width="1.53" height="3.05" ></rect><rect x="25.14" y="25.9" width="1.52" height="1.53" ></rect><rect x="25.14" y="21.33" width="1.52" height="3.05" ></rect><rect x="25.14" y="6.1" width="1.52" height="1.52" ></rect><rect x="23.62" y="27.43" width="1.52" height="1.52" ></rect><polygon points="25.14 10.67 23.62 10.67 23.62 12.19 22.09 12.19 22.09 13.71 23.62 13.71 23.62 15.24 25.14 15.24 25.14 13.71 26.66 13.71 26.66 12.19 25.14 12.19 25.14 10.67" ></polygon><rect x="22.09" y="4.57" width="3.05" height="1.53" ></rect><rect x="20.57" y="28.95" width="3.05" height="1.53" ></rect><path d="M17.52,15.24v4.57h4.57V15.24Zm3.05,3.05H19.04V16.76h1.53Z" ></path><rect x="9.9" y="30.48" width="10.67" height="1.52" ></rect><rect x="16" y="21.33" width="1.52" height="3.05" ></rect><rect x="14.47" y="3.05" width="7.62" height="1.52" ></rect><polygon points="14.47 15.24 16 15.24 16 13.71 17.52 13.71 17.52 12.19 16 12.19 16 10.67 14.47 10.67 14.47 12.19 12.95 12.19 12.95 13.71 14.47 13.71 14.47 15.24" ></polygon><rect x="12.95" y="24.38" width="3.05" height="1.52" ></rect><rect x="11.43" y="4.57" width="3.04" height="1.53" ></rect><rect x="11.43" y="21.33" width="1.52" height="3.05" ></rect><rect x="9.9" y="6.1" width="1.53" height="1.52" ></rect><rect x="9.9" width="1.53" height="1.52" ></rect><rect x="6.85" y="28.95" width="3.05" height="1.53" ></rect><rect x="8.38" y="7.62" width="1.52" height="3.05" ></rect><rect x="6.85" y="10.67" width="1.53" height="9.14" ></rect><rect x="5.33" y="27.43" width="1.52" height="1.52" ></rect><rect x="5.33" y="4.57" width="1.52" height="4.57" ></rect><rect x="3.81" y="25.9" width="1.52" height="1.53" ></rect><rect x="3.81" y="19.81" width="3.04" height="1.52" ></rect><rect x="2.28" y="3.05" width="3.05" height="1.52" ></rect><rect x="2.28" y="24.38" width="1.53" height="1.52" ></rect><rect x="2.28" y="18.29" width="1.53" height="1.52" ></rect><rect x="0.76" y="9.14" width="4.57" height="1.53" ></rect><rect x="2.28" y="6.1" width="1.53" height="1.52" ></rect><rect x="0.76" y="19.81" width="1.52" height="4.57" ></rect><rect x="0.76" y="13.71" width="1.52" height="1.53" ></rect><rect x="0.76" y="4.57" width="1.52" height="1.53" ></rect></g>                                            </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#Contact"
                                    data-te-toggle="tooltip"
                                    data-te-placement="right"
                                    data-te-ripple-init
                                    title="Contact me">
                                    <span>
                                        <svg
                                            className="drop-shadow-neonPinkGlow fill-current h-7 w-7 text-neonPink mx-auto hover:text-white"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g><polygon points="3.81 1.52 28.19 1.52 28.19 3.05 5.34 3.05 5.34 4.57 28.19 4.57 28.19 6.1 3.81 6.1 3.81 7.62 5.34 7.62 5.34 30.48 3.81 30.48 3.81 32 29.72 32 29.72 30.48 6.86 30.48 6.86 7.62 29.72 7.62 29.72 30.48 31.24 30.48 31.24 6.1 29.72 6.1 29.72 1.52 31.24 1.52 31.24 0 3.81 0 3.81 1.52" ></polygon><polygon points="25.15 12.19 9.91 12.19 9.91 13.72 8.38 13.72 8.38 16.76 12.96 16.76 12.96 15.24 22.1 15.24 22.1 16.76 26.67 16.76 26.67 13.72 25.15 13.72 25.15 12.19" ></polygon><path d="M23.62,19.81H22.1V18.29H20.57V16.76H19.05v1.53H16V16.76H14.48v1.53H12.96v1.52H11.43v1.52H9.91v4.58h1.52v1.52H23.62V25.91h1.53V21.33H23.62Zm-3.05,4.57H19.05v1.53H16V24.38H14.48V21.33H16V19.81h3.05v1.52h1.52Z" ></path><rect x="16" y="21.33" width="3.05" height="3.05" ></rect><rect x="2.29" y="28.95" width="1.52" height="1.53" ></rect><rect x="2.29" y="1.52" width="1.52" height="1.53" ></rect><polygon points="2.29 6.1 3.81 6.1 3.81 4.57 2.29 4.57 2.29 3.05 0.76 3.05 0.76 28.95 2.29 28.95 2.29 6.1" ></polygon></g>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </aside>
    )
}
