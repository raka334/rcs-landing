import SponsorSection from '@/components/SponsorSection'
import CoreTeam from '@/components/CoreTeam'
import PerksSection from '@/components/PerksSection'
import TicketSection from '@/components/TicketSection'
import VenueDate from '@/components/VenueDate'
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
                <h2 className='text-3xl font-bold pt-3'>
                Decrypt, Defend, Conquer <br /> 
                <span>
                    Cyber Sentinels at the Helm
                </span>

                </h2>
                <div className="paras max-w-xl flex gap-8 py-8">
                    <p>
                    Welcome to the Cyber Sentinels CTF, where digital warriors embrace the challenge. 
                    In the heartbeat of technology, our rallying cry is clear: &quot;Decrypt, Defend, Conquer.&quot;
                    More than a Capture The Flag event, this is a journey into cybersecurity, where offense and defense converge.
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
            <PerksSection />
            <VenueDate />
            <TicketSection />
            <SponsorSection />
            <CoreTeam />
        </main>
    )
}
