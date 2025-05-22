import React from "react";
import ImageSlider from "../common/ImageSlider";
import Navbar from "../components/LandingPage/Header/Navbar";

const page = () => {
    // const images = [
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801172/duvilleEstate/1.jpg",
    //         smallImg: "Duville-Estate/mob/1.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801173/duvilleEstate/2.jpg",
    //         smallImg: "Duville-Estate/mob/2.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801173/duvilleEstate/3.jpg",
    //         smallImg: "Duville-Estate/mob/3.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801173/duvilleEstate/4.jpg",
    //         smallImg: "Duville-Estate/mob/4.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801174/duvilleEstate/5.jpg",
    //         smallImg: "Duville-Estate/mob/5.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801174/duvilleEstate/6.jpg",
    //         smallImg: "Duville-Estate/mob/6.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801174/duvilleEstate/7.jpg",
    //         smallImg: "Duville-Estate/mob/7.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801174/duvilleEstate/8.jpg",
    //         smallImg: "Duville-Estate/mob/8.jpg",
    //     },
    //     {
    //         bigImg: "https://res.cloudinary.com/dfvccxflr/image/upload/v1732801174/duvilleEstate/9.jpg",
    //         smallImg: "Duville-Estate/mob/9.jpg",
    //     },
    // ];

     const images = [
        {
            bigImg: "Duville-Estate/desktop/1.jpg",
            smallImg: "Duville-Estate/mob/1.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/2.jpg",
            smallImg: "Duville-Estate/mob/2.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/3.jpg",
            smallImg: "Duville-Estate/mob/3.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/4.jpg",
            smallImg: "Duville-Estate/mob/4.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/5.jpg",
            smallImg: "Duville-Estate/mob/5.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/6.jpg",
            smallImg: "Duville-Estate/mob/6.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/7.jpg",
            smallImg: "Duville-Estate/mob/7.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/8.jpg",
            smallImg: "Duville-Estate/mob/8.jpg",
        },
        {
            bigImg: "Duville-Estate/desktop/9.jpg",
            smallImg: "Duville-Estate/mob/9.jpg",
        },
    ];

    return (
        <>
            <Navbar />
            {/* </div> */}
            <div className="-mt-[113px]">
                <ImageSlider images={images} />
            </div>
        </>
    );
};

export default page;
