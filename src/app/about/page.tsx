import HistoryCompany from '@/components/historyCompany'
import TeamCards from '@/components/teams'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <HistoryCompany/>

          {/* Teams Section */}
    <section className="max-w-7xl mx-auto mb-16">

<div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
    <p className="text-lg mt-4 max-w-2xl mx-auto">
        Our dedicated team of professionals works hard to bring our vision to life and ensure the success of our clients.
    </p>
</div>

{/* Teams */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white  rounded-lg shadow-lg">
    <TeamCards
        name="Arif"
        position="CEO"
        imgSrc="https://randomuser.me/api/portraits/men/30.jpg"
    />
    <TeamCards
        name="Dana"
        position="COOK"
        imgSrc="https://randomuser.me/api/portraits/men/34.jpg"
    />
    <TeamCards
        name="Dini"
        position="HELPER"
        imgSrc="https://randomuser.me/api/portraits/women/40.jpg"
    />
</div>
</section>
    </div>
  )

}

export default AboutPage


// Company History
// Teams bikin static
// Culture Company
// Footer