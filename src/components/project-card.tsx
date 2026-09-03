"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  tools: string;
  details: string;
}

export function ProjectCard({ img, title, desc, tools, details }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* Template Card Asli Anda */}
      <Card color="transparent" shadow={false} className="h-full flex flex-col">
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48 bg-gray-50 flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={1280}
            height={720}
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody className="p-0 flex flex-col flex-grow">
          <a
            href="#"
            className="text-blue-gray-900 transition-colors hover:text-gray-800"
          >
            <Typography variant="h5" className="mb-2">
              {title}
            </Typography>
          </a>
          <Typography className="mb-6 font-normal !text-gray-500">
            {desc}
          </Typography>
          <div className="mt-auto pt-4">
            <Button color="gray" size="sm" onClick={handleOpen}>
            see details
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Pop-up (Modal) Proyek */}
      <Dialog 
        open={open} 
        handler={handleOpen} 
        size="lg" 
        className="bg-white rounded-xl shadow-2xl"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -20 },
        }}
      >
        <div className="relative p-0 h-auto max-h-[85vh] overflow-y-auto text-left flex flex-col">
          
          <button
            onClick={handleOpen}
            className="absolute top-4 right-4 z-10 bg-white/80 p-1 rounded-full text-gray-900 hover:text-black transition-colors backdrop-blur-sm shadow-sm"
          >
            <XMarkIcon className="h-6 w-6" strokeWidth={2.5} />
          </button>

          <div className="w-full aspect-video relative shrink-0 bg-gray-50">
            <Image
              src={img}
              alt={title}
              fill
              className="object-contain md:object-cover rounded-t-xl"
            />
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-6">
              <Typography variant="h3" className="font-bold text-black mb-2">
                {title}
              </Typography>
              <div className="flex flex-wrap gap-2 mt-2">
                {tools.split(",").map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-md border border-gray-200"
                  >
                    {tool.trim()}
                  </span>
                ))}
              </div>
            </div>

            <hr className="my-6 border-gray-200" />

            <div>
              <Typography className="text-gray-800 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {details}
              </Typography>
            </div>
          </div>

        </div>
      </Dialog>
    </>
  );
}

export default ProjectCard;