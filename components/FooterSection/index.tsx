import React from 'react'
import { Twitter, Instagram, Facebook } from 'react-feather'

const FooterSection: React.FC = () => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between w-screen p-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div>
                <p className="text-3xl mb-3">Follow Us:</p>
                <div className="icons flex items-center gap-5">
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://example.com"
                    >
                        <Facebook height={30} width={30} />
                    </a>
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://example.com"
                    >
                        <Instagram height={30} width={30} />
                    </a>
                    <a
                        className="rounded-full border-2 border-white p-2"
                        href="https://example.com"
                    >
                        <Twitter height={30} width={30} />
                    </a>
                </div>
            </div>
            <div className="contact-us text-right">
                {/* Add your contact email here */}
                <p className="text-3xl font-bold">Queries</p>
                <p className="text-3xl">
                    Mail us at:{' '}
                    <a
                        className="text-primary"
                        href="mailto:contact@example.com"
                    >
                        contact@example.com
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default FooterSection
