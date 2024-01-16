import React from 'react'
import Button from '../ui/Button'

function TicketCard() {
  return (
      <div className="card w-full max-w-sm bg-white text-black p-5 rounded-lg">
          <p className="font-bold text-4xl">
              Student Pass
          </p>
          <p className="mt-8 text-lg">
              For students from other colleges and schools.
          </p>

          <div className="mt-8 text-lg">
              <p className="text-primary">Includes: </p>
              <div className="flex flex-col gap-2">
                    <p> - 1 x ID-Lanyard</p>
                    <p> - Access to CTF</p>
                    <p> - 2 x Meals Provided</p>
                    <p> - Complimentry Swags</p>
                    <p> - Conference Attendee Certificate</p>
              </div>
          </div>
          <div className="button mt-8">
              <Button size={'full'}>Coming Soon</Button>
          </div>
      </div>
  )
}

export default TicketCard