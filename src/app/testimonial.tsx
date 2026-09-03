"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section id="who-i-am" className="px-8 pb-16 pt-10 scroll-mt-20">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-5 text-center">
          <Typography variant="h1" color="blue-gray" className="mb-7">
            Who I am?
          </Typography>
        </div>
        
        <Card color="transparent" shadow={false} className="pb-8 lg:flex-row">
          <CardBody className="w-full lg:gap-20 h-full lg:!flex justify-between">
            
            {/* 2. BLOK GAMBAR DIPINDAH KE ATAS SINI (Agar di layar besar posisinya di KIRI) */}
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] mx-auto lg:mx-0 shrink-0 mb-10 lg:mb-0">
              <Image
                width={768}
                height={768}
                alt="Profile Image"
                src={`/image/kartun.png`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>

            {/* 3. BLOK TEKS DIPINDAH KE BAWAH SINI (Agar di layar besar posisinya di KANAN) */}
            <div className="w-full">
              <Typography className="mb-7 w-full lg:w-full font-normal text-lg !text-gray-600 leading-relaxed">      
                I am Yurista Indani, an Information Technology graduate from Udayana University and 
                Machine Learning Cohort at Bangkit Academy with a strong focus on Data Science and Artificial Intelligence.
              </Typography>
              <Typography className="mb-5 w-full lg:w-full font-normal text-lg !text-gray-600 leading-relaxed">      
                Experienced in developing end-to-end machine learning solutions, particularly in computer vision and deep learning, 
                including model optimization and mobile deployment. Actively engaged in organizational and committee roles, 
                cultivating strong leadership, communication, teamwork, and time management skills. 
                Passionate about leveraging AI to create impactful, data-driven applications.
              </Typography>
            </div>
            
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
