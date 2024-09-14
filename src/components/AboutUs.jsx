import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

function AboutUs() {
    return (
        <div className="bg-white py-10" id="about-us">
            <section className="flex justify-center gap-2">
                <FontAwesomeIcon icon={faAddressCard} size="3x" className="text-[#3085C3]" />
                <h1 className="text-3xl lg:text-5xl text-[#3085C3] font-bold">Who We Are</h1>
            </section>

            <p className="mx-auto text-center p-4 text-black w-5/6">
                "Welcome to Visa Lounge, your trusted destination for visa, attestation,
                passport, and insurance services. With a focus on delivering seamless
                travel solutions, we simplify the complexities of international
                documentation. Our dedicated team of experts provides personalized
                attention and meticulous support, ensuring a hassle-free experience.
                From visa applications to document legalization and passport services,
                we handle it all with efficiency and reliability. Additionally, we offer
                comprehensive travel insurance coverage for your peace of mind. With
                strong partnerships and up-to-date knowledge of regulations, we ensure
                accurate and prompt service. Choose Visa Lounge for a smooth and secure
                journey, backed by years of industry expertise."
            </p>
        </div>
    )
}

export default AboutUs