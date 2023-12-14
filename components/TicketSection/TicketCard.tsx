import React from 'react'
import Button from '../ui/Button'

function TicketCard() {
  return (
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
  )
}

export default TicketCard