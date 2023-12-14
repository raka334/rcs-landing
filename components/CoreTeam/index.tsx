import React from 'react'
// import {} from ""
import { Linkedin, GitHub } from 'react-feather'

function CoreTeam() {
    return (
        <section className="h-screen max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-28">
            <h2 className="text-8xl text-primary font-bold">Core Team</h2>
            <div className="list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-16 p-8 lg:p-10 max-w-4xl mx-auto">
                <div className="flex flex-col gap-5 items-center px-5">
                    <div className="w-full aspect-square border-primary border-2 rounded-full overflow-hidden">
                        <img
                            src="/profile.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="links flex gap-4">
                        <a href="">
                            <Linkedin width={28} height={28} />
                        </a>
                        <a href="">
                            <GitHub width={28} height={28} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center px-5">
                    <div className="w-full aspect-square border-primary border-2 rounded-full overflow-hidden">
                        <img
                            src="/profile.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="links flex gap-4">
                        <a href="">
                            <Linkedin width={28} height={28} />
                        </a>
                        <a href="">
                            <GitHub width={28} height={28} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center px-5">
                    <div className="w-full aspect-square border-primary border-2 rounded-full overflow-hidden">
                        <img
                            src="/profile.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="links flex gap-4">
                        <a href="">
                            <Linkedin width={28} height={28} />
                        </a>
                        <a href="">
                            <GitHub width={28} height={28} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center px-5">
                    <div className="w-full aspect-square border-primary border-2 rounded-full overflow-hidden">
                        <img
                            src="/profile.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="links flex gap-4">
                        <a href="">
                            <Linkedin width={28} height={28} />
                        </a>
                        <a href="">
                            <GitHub width={28} height={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoreTeam
