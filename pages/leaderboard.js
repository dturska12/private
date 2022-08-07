import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState, useEffect } from "react";

import { 
    getCurrentWalletConnected
} from '../utils/interact';

const Leaderboard = () => {

    useEffect(() => {
        const fetchData = async () => {
          const {address, status, success} = await getCurrentWalletConnected();
          if(!success) Router.push('/');
        };
    
        fetchData();
    },[]);


  return(
    <>
        <Head>
            <meta charset="UTF-8" />
            <link rel="shortcut icon" type="image/png" href="images/app/favicon.ico" />
            <meta name="og:type" content="website" />
            <meta name="twitter:card" content="photo" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Leaderboard - Tasties</title>
        </Head>
        <header>
            <nav id="navtop" className="navbar navbar-expand-md mb-4">
                <div className="container">
                <Link href="/" >
                <a className="icon-home d-block">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_696_2973)">
                        <path d="M11.5831 0H11.9362C12.0611 0.0296882 12.1896 0.0513716 12.31 0.0907335C12.6129 0.189472 12.8459 0.374272 13.0709 0.564243C14.0733 1.41252 15.0749 2.26153 16.0756 3.11126C16.1017 3.13344 16.1288 3.15462 16.1696 3.18764C16.1696 2.9428 16.168 2.7183 16.1696 2.49364C16.1717 2.16492 16.3261 1.85016 16.5993 1.61757C16.8725 1.38498 17.2425 1.25331 17.6291 1.25107C18.1289 1.24807 18.6294 1.24941 19.1282 1.25107C19.2196 1.25121 19.3108 1.25926 19.4003 1.27509C20.1031 1.40352 20.5781 1.90455 20.5785 2.51799C20.5796 3.96237 20.5792 5.4067 20.5774 6.85096C20.5761 6.87936 20.5822 6.90764 20.5952 6.93381C20.6082 6.95999 20.6278 6.9834 20.6527 7.00241C21.3219 7.56832 21.9918 8.13389 22.6547 8.70531C22.8607 8.88277 23.0666 9.06507 23.2369 9.26655C23.5888 9.68168 23.6202 10.1365 23.3481 10.5878C23.0778 11.0362 22.6173 11.2443 22.0296 11.2488C21.5822 11.2522 21.1348 11.2488 20.6872 11.2488H20.5789V11.3681C20.5789 13.8177 20.5789 16.2675 20.5789 18.7172C20.5789 19.4484 19.9317 19.9985 19.0745 19.9987C17.6538 19.9987 16.233 19.9987 14.8123 19.9987H14.6995V19.8831C14.6995 17.8499 14.6995 15.8168 14.6995 13.7837C14.6995 13.0498 14.0608 12.5011 13.1999 12.4994C12.2396 12.4974 11.2794 12.4974 10.3192 12.4994C10.2115 12.4983 10.1039 12.5066 9.99826 12.5244C9.29528 12.652 8.82139 13.1535 8.82021 13.767C8.81943 15.8085 8.81943 17.8499 8.82021 19.8914V19.9983H8.74627C7.2961 19.9983 5.84593 19.9979 4.39576 19.9972C4.30114 19.9968 4.20681 19.9882 4.11429 19.9713C3.41797 19.8454 2.94075 19.3385 2.94075 18.7251C2.94075 16.2696 2.94075 13.8143 2.94075 11.3591V11.2483H2.82306C2.35937 11.2483 1.89549 11.2515 1.4318 11.2471C1.12568 11.2451 0.828323 11.16 0.583101 11.0041C0.337879 10.8483 0.157615 10.6299 0.0685928 10.3809C0.0411325 10.3048 0.0236773 10.2259 0.00170898 10.1484V9.84814C0.0082418 9.83888 0.013195 9.82889 0.0164199 9.81845C0.0464617 9.59904 0.150936 9.3918 0.317108 9.22202C0.4956 9.03855 0.682531 8.85909 0.880441 8.69063C2.93827 6.93814 4.9978 5.1872 7.05902 3.43782C8.10735 2.54685 9.15575 1.65575 10.2042 0.764553C10.2711 0.707679 10.3403 0.652641 10.407 0.5956C10.7377 0.312895 11.0928 0.0602103 11.5831 0Z" fill="#46248A"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_696_2973">
                        <rect width="23.5294" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav socials d-md-none">
                    <li className="nav-item">
                        <Link href="https://twitter.com/tastiesnft">
                            <a className="nav-link" target="_blank" rel="noreferrer" title="Twitter">
                            <svg viewBox="0 0 512 512">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="https://discord.gg/tasties">
                            <a className="nav-link discord" target="_blank" rel="noreferrer" title="Discord">
                            <svg viewBox="0 0 640 512">
                                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                            </svg>
                            </a>
                        </Link>
                    </li>
                    </ul>
                    <ul className="navbar-nav links me-auto mb-lg-0 justify-content-end flex-grow-1">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Staking</a></Link>
                    </li>
                    <li className="nav-item active">
                        <Link href="/leaderboard"><a className="nav-link">Leaderboard</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/shop"><a className="nav-link disabled">Sweet Shop</a></Link>
                    </li>
                    <li className="nav-item casino">
                        <Link href="#">
                            <a className="nav-link disabled">
                            Casino
                            <span className="badge rounded-pill tastie-number">
                                soon
                            </span>
                            </a>
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>

        <div className="leaderboard d-flex flex-column h-100"> 
            <main className="flex-shrink-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 offset-lg-2">
                            <div id="leaderboard-wrapper">
                                <div className="row g-0">
                                    <div className="col-12 col-xl-6 rankings-col-a">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr id="ranking-first">
                                                    <th scope="row">#1</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr id="ranking-second">
                                                    <th scope="row">#2</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr id="ranking-third">
                                                    <th scope="row">#3</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#4</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#5</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#6</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#7</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#8</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#9</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#10</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#11</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#12</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-12 col-xl-6 rankings-col-b">
                                        <table className="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">#13</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#14</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#15</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#16</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#17</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#18</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#19</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#20</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#21</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#22</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">#23</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                                <tr id="ranking-user">
                                                    <th scope="row">#7278</th>
                                                    <td>Name</td>
                                                    <td>XYZ*Score*</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="footer-wrapper mt-auto">

                <footer>
                    <img className="footer-logo" src="images/leaderboard/footer-logo.svg"/>
                    <Link href="https://twitter.com/tastiesnft">
                        <a  target="_blank" rel="noreferrer" title="Twitter">
                            <svg viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </a>
                    </Link>
                    <Link href="https://discord.gg/tasties">
                        <a className="discord" target="_blank" rel="noreferrer" title="Discord">
                            <svg viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
                        </a>
                    </Link>
                    <p>&copy; 2022 Tasties</p>
                </footer>

                {/* <div id="preloader">
                    <div className="anim"></div>
                </div> */}
            </section>
        </div>
    </>
  );
};


export default Leaderboard;