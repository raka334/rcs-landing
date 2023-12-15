import React from 'react'
import SponsorsRow from './SponsorsRow'
import sponsorsData from './sponsors.json'

type Sponsor = {
    name: string
    logo: string
}

type SponsorCategory = {
    category: string
    sponsors: Sponsor[]
}

function SponsorSection() {
    return (
        <section className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-28">
                {sponsorsData.map(
                    (sponsorCategory: SponsorCategory, index: number) => (
                        <div key={index} className="">
                            <h2 className="text-8xl text-primary font-bold">{sponsorCategory.category}</h2>
                            <SponsorsRow sponsors={sponsorCategory.sponsors} />
                        </div>
                    )
                )}
        </section>
    )
}

export default SponsorSection
