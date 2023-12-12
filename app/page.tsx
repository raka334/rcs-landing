import Button from '@/components/ui/Button'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

export default function Home() {
    return (
        <main className=" ">
            <section className="flex flex-col h-screen max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 justify-center bg-background p-2">
                <h1 className="text-6xl font-bold">
                    REPUBLIC OF <br />
                    <span className="text-primary">CYBER SENTINELS CTF</span>
                </h1>
                <div className="paras max-w-xl flex gap-8 py-8">
                    <p>
                        Lorem ipsum dolor sit amet, con- sectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, con- sectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                    </p>
                </div>
                <div className="mt-10 text-xl flex items-center gap-3">
                    <PlayCircleIcon
                        height={30}
                        width={30}
                        className="text-primary"
                    />{' '}
                    REGISTER NOW
                </div>
            </section>
            <section className="flex flex-col h-screen max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 justify-center ">
                <div className="card w-full max-w-sm bg-white text-black p-5">
                    <p className="font-bold text-4xl">
                        LPU <br />
                        Student Pass
                    </p>
                    <p className="mt-8 text-lg">
                        For the students of Lovely Professional University.
                    </p>

                    <div className="mt-8 text-lg">
                        <p className="text-primary">Includes: </p>
                    </div>
                    <div className="button">
                        <Button size={'full'}>Rs. 200</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
