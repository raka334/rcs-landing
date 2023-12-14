import React from 'react'
import Button from '../ui/Button'
import TicketCard from './TicketCard'

function TicketSection() {
    return (
        <section className="flex flex-col lg:flex-row h-screen max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 justify-center items-center gap-4">
            <TicketCard />
            <TicketCard />
        </section>
    )
}

export default TicketSection
