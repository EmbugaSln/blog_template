import leadImage from "../assets/images/lead.jpg"
import {Link} from "react-router-dom"
function HeroSection() {
    return (
        <>

            <section className="w-full py-12 bg-red-200">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <img
                            src={leadImage}
                            alt="Organic Produce"
                            className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            width={550}
                            height={550}
                            style={{ aspectRatio: "550/550", objectFit: "cover" }}
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter text-red-700 sm:text-5xl xl:text-6xl">
                                    Devloop
                                </h1>
                                <p className="max-w-[600px] text-gray-700 md:text-lg">
                                    Blog application with React, Tailwind CSS, and Firebase
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                    to="/login"
                                    rel="ugc"
                                >
                                    Login
                                </Link>
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-red-600 bg-white px-8 text-sm font-medium text-red-600 shadow-sm transition-colors hover:bg-red-100 hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                      to="/register"
                                    rel="ugc"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default HeroSection