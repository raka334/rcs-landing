import SponsorSection from '@/components/SponsorSection'
import CoreTeam from '@/components/CoreTeam'
import PerksSection from '@/components/PerksSection'
import TicketSection from '@/components/TicketSection'
import VenueDate from '@/components/VenueDate'
import Button from '@/components/ui/Button'
import { PlayCircleIcon } from '@heroicons/react/24/outline'

export default function Home() {
    return (
        <main className="text-text ">
            <section className="flex relative flex-col min-h-screen lg:h-screen max-w-7xl mx-auto px-4 lg:px-8 pt-18 justify-center bg-background p-2">
                <h1 className="text-5xl lg:text-6xl font-bold">
                    REPUBLIC OF <br />
                    <span className="text-primary">CYBER SENTINELS CTF</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold pt-3">
                    Decrypt, Defend, Conquer <br />
                    <span>Cyber Sentinels at the Helm</span>
                </h2>
                <div className="paras max-w-xl flex gap-8 py-8">
                    <p>
                        Welcome to the Cyber Sentinels CTF, where digital
                        warriors embrace the challenge. In the heartbeat of
                        technology, our rallying cry is clear: &quot;Decrypt,
                        Defend, Conquer.&quot; More than a Capture The Flag
                        event, this is a journey into cybersecurity, where
                        offense and defense converge.
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
                <div className="date hidden lg:block absolute top-60 right-0 rotate-90">
                    <p className="text-6xl text-primary font-bold tracking-[1.5rem]">
                        CTF
                    </p>
                    <p className="text-4xl font-semibold ml-28">
                        26 · 01 · 2024
                    </p>
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
