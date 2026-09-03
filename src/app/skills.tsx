"use client";

import React from "react";
import { 
  Typography,
  Dialog, 
  Button,
  IconButton
} from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components"; 

// Komponen Modal khusus untuk pengalaman Bangkit
function DetailModalBangkit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="mt-auto pt-4">
      <Button color="gray" size="sm" onClick={handleOpen}>
         See Detail
      </Button>

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
        <div className="relative p-8 md:p-12 h-auto max-h-[85vh] overflow-y-auto text-left">
          
          <button
            onClick={handleOpen}
            className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
          >
            <XMarkIcon className="h-6 w-6" strokeWidth={2.5} />
          </button>

          {/* Bagian Header dengan Logo di Sebelah Kiri */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4 pr-8">
            <div className="h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full shadow-md shrink-0 bg-white border border-gray-100">
              <img 
                src="/image/bangkit.jpg" 
                alt="Bangkit Logo" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div>
              <Typography variant="h3" className="font-bold text-black mb-1">
                Machine Learning Graduate
              </Typography>
              <Typography className="text-gray-800 text-base md:text-lg mb-1 font-medium">
                Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
              </Typography>
              <Typography className="text-black font-bold text-sm">
                Sep 2024 - Jan 2025
              </Typography>
            </div>
          </div>

          <hr className="my-6 border-gray-500" />

          <div>
            <Typography className="font-bold text-black text-base md:text-lg mb-4">
              Key Responsibilities & Achievements:
            </Typography>
            <ul className="list-disc pl-5 flex flex-col gap-4 text-gray-800 text-sm md:text-base leading-relaxed">
              <li>
                Graduated from a rigorous, industry-led Machine Learning learning path, mastering advanced concepts including CNNs, NLP, GANs, Time Series Prediction, and TensorFlow Deployment through Google and Coursera specializations.               </li>
              <li>
                Honed practical technical skills by building end-to-end ML pipelines, utilizing OpenCV for robust image preprocessing (resizing and normalization) alongside TensorFlow for model training and evaluation.               </li>
              <li>
                Collaborated within a multidisciplinary capstone team (Machine Learning, Cloud Computing, and Mobile Development) to engineer Spotlyze, an AI-driven Android application designed to detect skin types and conditions.               </li>
              <li>
                Engineered the core computer vision feature for Spotlyze by fine-tuning a pre-trained VGG19 backbone with a custom classification head, successfully achieving 94.69% accuracy in diagnosing skin conditions.               </li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

function DetailModalTresurer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="mt-auto pt-4">
      <Button color="gray" size="sm" onClick={handleOpen}>
         See Detail
      </Button>

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
        <div className="relative p-8 md:p-12 h-auto max-h-[85vh] overflow-y-auto text-left">
          
          <button
            onClick={handleOpen}
            className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
          >
            <XMarkIcon className="h-6 w-6" strokeWidth={2.5} />
          </button>

          {/* Bagian Header dengan Logo di Sebelah Kiri */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4 pr-8">
            <div className="h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full shadow-md shrink-0 bg-white border border-gray-100">
              <img 
                src="/image/logo_hmti.png" 
                alt="Treasurer Logo" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div>
              <Typography variant="h3" className="font-bold text-black mb-1">
                Treasurer
              </Typography>
              <Typography className="text-gray-800 text-base md:text-lg mb-1 font-medium">
                Himpunan Mahasiswa Teknologi Informasi
              </Typography>
              <Typography className="text-black font-bold text-sm">
                Jan 2024 - Dec 2025
              </Typography>
            </div>
          </div>

          <hr className="my-6 border-gray-500" />

          <div>
            <Typography className="font-bold text-black text-base md:text-lg mb-4">
              Key Responsibilities & Achievements:
            </Typography>
            <ul className="list-disc pl-5 flex flex-col gap-4 text-gray-800 text-sm md:text-base leading-relaxed">
              <li>
                Recorded all financial income and expenses for Himpunan Mahasiswa Teknologi Informasi (HMTI).   
              </li>          
              <li>
                Monitored the finances of internal activities and programs within HMTI.   
              </li> 
              <li>
               Collaborated with all heads of departments and divisions regarding necessary expenditures.   
              </li><li>
                Worked closely with the Activity Treasurer on event budget management, ensuring financial efficiency and transparency.   
              </li><li>
                Prepared monthly and annual financial reports for the HMTI management board.   
              </li><li>
                Ensured all financial transactions were properly documented and compliant with established procedures.   
              </li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

function DetailModalEvent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="mt-auto pt-4">
      <Button color="gray" size="sm" onClick={handleOpen}>
         See Detail
      </Button>

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
        <div className="relative p-8 md:p-12 h-auto max-h-[85vh] overflow-y-auto text-left">
          
          <button
            onClick={handleOpen}
            className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
          >
            <XMarkIcon className="h-6 w-6" strokeWidth={2.5} />
          </button>

          {/* Bagian Header dengan Logo di Sebelah Kiri */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-4 pr-8">
            <div className="h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full shadow-md shrink-0 bg-white border border-gray-100">
              <img 
                src="/image/logo_hmti.png" 
                alt="Event Logo" 
                className="h-full w-full object-cover" 
              />
            </div>
            <div>
              <Typography variant="h3" className="font-bold text-black mb-1">
                Event Coordinator
              </Typography>
              <Typography className="text-gray-800 text-base md:text-lg mb-1 font-medium">
                SPORTI (Himpunan Mahasiswa Teknologi Informasi)
              </Typography>
              <Typography className="text-black font-bold text-sm">
                Jan 2023 - May 2023
              </Typography>
            </div>
          </div>

          <hr className="my-6 border-gray-500" />

          <div>
            <Typography className="font-bold text-black text-base md:text-lg mb-4">
              Key Responsibilities & Achievements:
            </Typography>
            <ul className="list-disc pl-5 flex flex-col gap-4 text-gray-800 text-sm md:text-base leading-relaxed">
              <li>
                Conceptualized an innovative event theme that introduced a fresh and engaging atmosphere for attendees.   
              </li>          
              <li>
                Designed and managed well-structured rundowns for both opening and closing ceremonies.   
              </li> 
              <li>
                Collaborated with cross-functional divisions to ensure seamless alignment and execution of the event lineup.   
              </li><li>
                Delegated tasks strategically to division members based on their individual strengths and capabilities.   
              </li><li>
                Directed and supervised the event division team, ensuring smooth operations throughout the entire event.   
              </li>
            </ul>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
const SKILLS = [
 {
    icon: "/image/bangkit.jpg", // Ubah bagian ini menggunakan path gambar Anda
    title: "Machine Learning Graduate",
    children: (
      <div className="flex flex-col flex-grow h-full mt-1">
        <h2 className="text-lg font-normal text-blue-gray-900 leading-none">
          Sept 2024 - Jan 2025
        </h2>
        <p className="text-base text-gray-600 font-normal leading-tight mt-3">
          Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
        </p>
        
        {/* Panggil komponen pop-up di sini */}
        <DetailModalBangkit />
      </div>
    ),
  },
  {
    icon: "/image/logo_hmti.png",
    title: "Treasurer",
    children: (
       <div className="flex flex-col flex-grow h-full mt-1">
         <h2 className="text-lg font-normal text-blue-gray-900 leading-none">
            Jan 2024 - Dec 2025
         </h2>
         <p className="text-base text-gray-600 font-normal leading-tight mt-3 mb-5">
          Himpunan Mahasiswa Teknologi Informasi
         </p>
         <DetailModalTresurer />
       </div>
    )
  },
  {
    icon: "/image/logo_hmti.png",
    title: "Event Coordinator",
    children: (
      <div className="flex flex-col flex-grow h-full mt-1">
         <h2 className="text-lg font-normal text-blue-gray-900 leading-none">
            Jan 2023 - May 2023
         </h2>
         <p className="text-base text-gray-600 font-normal leading-tight mt-3">
            SPORTI </p>
          <p className="text-base text-gray-600 font-normal leading-tight mt-1">
            Himpunan Mahasiswa Teknologi Informasi </p>
          <DetailModalEvent />
       </div>
    )
  }
];

export function Skills() {
  return (
    <section id="experiences" className="px-8 pb-16 pt-10 scroll-mt-20">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Experiences
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-6">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;