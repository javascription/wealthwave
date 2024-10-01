"use client";

import React from 'react';
import { useSession } from "next-auth/react";

const Dashboard = () => {

    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="absolute top-0 w-screen h-screen flex justify-center items-center"><p>Loading...</p></div>
    }

    return (
        <section className="w-screen h-screen flex flex-col justify-center items-center top-0 left-0">
             {session ? (
                        <>
                            <div className="lg:ml-6 lg:pl-4 lg:flex lg:flex-col lg:w-[75%] mt-5 mx-2">

                            <div className="lg:flex gap-4 items-stretch">
                                <div className="md:p-2 p-6 rounded-lg mb-4 lg:mb-0 shadow-md lg:w-[35%] border-2 border-secondary">
                                    <div className="flex justify-center items-center space-x-5 h-full">
                                        <div>
                                            <p>Balance</p>
                                            <h2 className="text-4xl font-bold text-gray-600">₹6006.13</h2>
                                        </div>
                                        <img src="https://www.emprenderconactitud.com/img/Wallet.png" alt="wallet" width={150} height={100} />
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%] border-2 border-secondary">
                                    <div className="flex flex-wrap justify-between h-full">
                                        <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                            <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
                                            <p className="text-white">Deposit</p>
                                        </div>
                                        <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                            <i className="fas fa-exchange-alt text-white text-4xl"></i>
                                            <p className="text-white">Transfer</p>
                                        </div>
                                        <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                            <i className="fas fa-qrcode text-white text-4xl"></i>
                                            <p className="text-white">Withdraw</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <table className="table-auto w-full mt-5">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 text-left border-b-2 w-full">
                                            <h2 className="text-xl font-bold">Transactions</h2>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b w-full">
                                        <td className="px-4 py-2 text-left align-top w-1/2">
                                            <div>
                                                <h2>Comercio</h2>
                                                <p>24/07/2023</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                            <p><span>150$</span></p>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="px-4 py-2 text-left align-top w-1/2">
                                            <div>
                                                <h2>Comercio</h2>
                                                <p>24/06/2023</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                            <p><span>15$</span></p>
                                        </td>
                                    </tr>
                                    <tr className="border-b w-full">
                                        <td className="px-4 py-2 text-left align-top w-1/2">
                                            <div>
                                                <h2>Comercio</h2>
                                                <p>02/05/2023</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                                            <p><span>50$</span></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                    </>
            ) : ( 
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
                            Dashboard
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            You need to be logged in to access the Dashboard. Please log in to access this page.
                        </p>
                    </div>
                </section>
                )
            }
        </section>
    );
};

export default Dashboard;
