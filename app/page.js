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

export default function Home () {
  return (
    <div className="">
      <UseScroll />
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
      <ScrollAnimation />







    </div>
  );
}
