import React from 'react'
import Button from '../ui/Button'

function TicketCard() {
  return (
      <div className="card w-full max-w-sm bg-white text-black p-5 rounded-lg">
          <p className="font-bold text-4xl">
              LPU <br />
              Student Pass
          </p>
          <p className="mt-8 text-lg">
              For the students of Lovely Professional University.
          </p>

          <div className="mt-8 text-lg">
              <p className="text-primary">Includes: </p>
              <div className="flex flex-col gap-2">
                    <p> - Welcome Kit Includes: 1 x Notepad-Pen, 1 x ID-Lanyard, Stickers</p>
                    <p> - Access to CTF</p>
                    <p> - Lunch, Dinner & Snacks</p>
                    <p> - Complimentry Swags</p>
                    <p> - Conference Attendee Certificate</p>
              </div>
          </div>
          <div className="button mt-8 bg-primary">
              <Button size={'full'} >Coming Soon</Button>
          </div>
      </div>
  )
}

export default TicketCard