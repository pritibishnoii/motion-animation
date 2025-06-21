import Image from "next/image";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Bounc from "@/components/Bounc";
import Varients from "@/components/Varients"
import BoxVariants from "@/components/BoxVariants";
import { FlipCard } from "@/components/FlipCard";
import Gesture from "@/components/Gesture";
import Gallery from "@/components/Gallery";
import StagerAnimation from "@/components/StagerAnimation";
import AnimatedGallery from "@/components/AnimatedGallery";
import MotionHook from "@/components/MotionHook";
import ScrollAnimation from "@/components/ScrollAnimation";
import UseScroll from "@/components/UseScroll";

import SwappableCard from "@/components/SwappableCard";
import RotateOnDrag from "@/components/RotateOnDrag";
import GestureBasedImageGallery from "@/components/GestureBasedImageGallery";
import StaggerItems from "@/components/StaggerItems";
import Loader from "@/components/Loader";
import PageScrollAnimation from "@/components/PageScrollAnimation";
import GalleryAnimationY from "@/components/GalleryAnimationY";

export default function Home () {
  return (
    <div className="">

      {/* <PageScrollAnimation /> */ }
      <UseScroll />
      {/* 

      <Loader />
      <StaggerItems />
      <GalleryAnimationY />
      <GestureBasedImageGallery />
      <SwappableCard />
      <RotateOnDrag />

      <MotionHook />
      <div className="m-8"> <AnimatedGallery /></div>

      <StagerAnimation />
      <div className="my-8 flex  justify-center">
        <Gallery />
      </div>
      <Gesture />
      <FlipCard />
      <BoxVariants />
      <Card />
      <Button />
      <Bounc />
      <Varients />
      <ScrollAnimation /> */}







    </div>
  );
}
