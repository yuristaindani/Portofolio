import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export function SkillCard({ icon: imageSrc, title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false} className="h-full flex flex-col w-full">
      <CardBody className="flex flex-col h-full items-center text-center">
        
        <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full shrink-0">
          <img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-full object-cover bg-white" 
          />
        </div>

        <Typography variant="h5" color="blue-gray" className="mb-2 shrink-0">
          {title}
        </Typography>
        
        {/* flex-grow memaksa pembungkus teks ini meregang ke bawah */}
        <Typography className="px-2 md:px-6 font-normal !text-gray-500 flex flex-col flex-grow w-full" as="div">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;