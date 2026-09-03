"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { DocumentTextIcon} from "@heroicons/react/24/solid";

function Hero() {
  return (
    <header id="home" className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hi! <br /> I&apos;m Yurista Indani
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m a passionate and dedicated Information Technology 
            graduate with a strong interest in Artificial Intelligence. 
            Here, you&apos;ll get a glimpse of my journey.
          </Typography>
          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <a href="/CV-Yurista.pdf" target="_blank" rel="noopener noreferrer">
              <Button color="gray" className="flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/profile.jpg`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
