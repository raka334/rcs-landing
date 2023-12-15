import React from 'react';

type Sponsor = {
    name: string;
    logo: string;
};

type SponsorsArray = {
    sponsors: Sponsor[];
};

function SponsorsRow({ sponsors }: SponsorsArray) {
    return (
        <div className="flex flex-wrap justify-center sm:justify-center gap-16 p-8 lg:p-10 mx-auto">
            {sponsors.map((sponsor, index) => (
                <img key={index} src={sponsor.logo} alt={sponsor.name} title={sponsor.name} className="w-60" />
            ))}
        </div>
    );
};

export default SponsorsRow;