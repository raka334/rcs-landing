import React from 'react'

function PerksSection() {
    return (
        <section className="flex flex-col h-screen justify-between">
            <div className="perksCard p-10 text-black bg-white flex gap-5 max-w-xl ml-auto">
                <div className="text-7xl font-semibold">01</div>
                <div className="">
                    <h2 className="text-3xl font-medium">CTF Perks</h2>
                    <p>
                        orem ipsum dolor sit amet, consectetuer adipiscing elit,
                        sed diam nonummy nibh euis- mod tincidunt ut laoreet
                        dolore magna ali- quam erat volutpat. Ut wisi enim ad
                        minim
                    </p>
                </div>
            </div>
            <h2 className='mx-auto text-5xl font-medium my-10 text-center'>
                Prepare for the ultimate <br /> test of
                <span className="text-primary"> Cyber Prowess</span>
            </h2>
        </section>
    )
}

export default PerksSection
