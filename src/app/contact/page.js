"use client"

import { useSession } from "next-auth/react"

export default function Contact() {
    const { data: session, status } = useSession();

    
    if (status === "loading") {
        return <div className="absolute top-0 w-screen h-screen flex justify-center items-center"><p>Loading...</p></div>
    }

    return (
        <>
            
            {session ? (
                        <>
                        <section>
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
                                <p className="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a feature? Let us know.</p>
                                <form className="space-y-8" >
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="lorem@ipsum.net"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required/>
                                    </div>
                                    <button type="submit" className="border border-accent py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit">Send message</button>
                                </form>
                            </div>
                        </section>
                    </>
            ) : ( 
                <section>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Contact Us
                        </h2>
                        <p className=" text-left text-gray-500 dark:text-gray-400">
                            You need to be logged in to contact us. Please log in to access the contact form.
                        </p>
                    </div>
                </section>
                )
            }

        </>
    )
}