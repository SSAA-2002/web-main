import React from 'react'

import singapore from "../../assets/images/singapore.jpg"
import malaysia from "../../assets/images/malaysia.jpg"
import vietnam from "../../assets/images/vietnam.jpg"
import thailand from "../../assets/images/thailand.jpg"
import srilanka from "../../assets/images/srilanka.jpg"
import azerbaijan from "../../assets/images/azerbaijan.jpg"
import combodia from "../../assets/images/combodia.jpg"
import schengen from "../../assets/images/schengen.jpg"
import laos from "../../assets/images/laos.jpg"
import georgia from "../../assets/images/georgia.jpg"
import armenia from "../../assets/images/armenia.jpg"
import japan from "../../assets/images/japan.jpg"
import korea from "../../assets/images/korea.jpg"
import china from "../../assets/images/china.jpg"
import phillipines from "../../assets/images/phillipines.jpg"
import turkey from "../../assets/images/turkey.jpg"
import usa from "../../assets/images/usa.jpg"
import uk from "../../assets/images/uk.jpg"
import canada from "../../assets/images/canada.jpg"
import australia from "../../assets/images/australia.jpg"
import bali from "../../assets/images/bali.jpg"

function VisaCards() {

    const cardDatas = [
        {
            image: singapore,
            title: "Singapore"
        },
        {
            image: malaysia,
            title: "Malaysia",
        },
        {
            image: vietnam,
            title: "Vietnam",
        },
        {
            image: thailand,
            title: "Thailand",
        },
        {
            image: srilanka,
            title: "Srilanka",
        },
        {
            image: combodia,
            title: "Combodia",
        },
        {
            image: schengen,
            title: "SCHENGEN",
        },
        {
            image: laos,
            title: "Laos",
        },
        {
            image: azerbaijan,
            title: "Azerbaijan",
        },
        {
            image: georgia,
            title: "Georgia",
        },
        {
            image: armenia,
            title: "Armenia",
        },
        {
            image: japan,
            title: "Japan",
        },
        {
            image: china,
            title: "China",
        },
        {
            image: korea,
            title: "South Korea",
        },
        {
            image: phillipines,
            title: "Phillipines",
        },
        {
            image: turkey,
            title: "Turkey",
        },
        {
            image: usa,
            title: "United States Of America",
        },
        {
            image: uk,
            title: "United Kingdom",
        },
        {
            image: canada,
            title: "Canada",
        },
        {
            image: australia,
            title: "Australia",
        },
        {
            image: bali,
            title: "Bali",
        },
    ];


    return (
        <div className='flex flex-wrap justify-center items-center gap-5 bg-white py-10'>
            {
                cardDatas.map((data, index) => (
                    <div className="card bg-base-100 image-full w-[400px]  shadow-transparent relative" key={index}>
                        <figure>
                            <img src={data.image} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-white font-bold text-center text-4xl">{data.title}</h2>
                            <div className="absolute bottom-4 right-4">
                                <button className="btn btn-accent" onClick={() => document.getElementById('my_modal_2').showModal()}>View Details</button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click outside to close</p>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>

                )

                )
            }

        </div>
    )
}

export default VisaCards