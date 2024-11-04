import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import ShimmerButton from "../shimmer-button";
export default function HomeBackground() {
  return (
    (<div>
      <ShootingStars />
      <StarsBackground />
    </div>)
  );
}

