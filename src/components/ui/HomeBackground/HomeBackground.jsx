import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function HomeBackground() {
  return (
    (<div
      className="tw-h-[40rem] tw-rounded-md tw-bg-neutral-900 tw-flex tw-flex-col tw-items-center tw-justify-center tw-relative tw-w-full">
      <h2
        className="tw-relative tw-flex-col md:tw-flex-column tw-z-10 tw-text-3xl md:tw-text-2xl tw-max-w-5xl tw-mx-auto tw-text-center tw-tracking-tight tw-font-medium tw-bg-clip-text tw-bg-gradient-to-b from-neutral-800 via-white to-white tw-flex tw-items-center ">
        <span>Hi, moi c'est</span>
        <span className="tw-text-white tw-text-8xl tw-font-thin reenie-beanie-regular  ">Tiphanie Jan</span>
        <span>Intégrateur web - Passionnée de Front-end</span>
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}

export default HomeBackground;
