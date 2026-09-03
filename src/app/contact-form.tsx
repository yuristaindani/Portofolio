// "use client";

// import {
//   Typography,
//   Card,
//   CardBody,
//   Radio,
//   Input,
//   Textarea,
//   Button,
//   IconButton,
// } from "@material-tailwind/react";
// import { EnvelopeIcon, MapPinIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

// export function ContactForm() {
//   return (
//     <section id="contact" className="px-8 py-16">
//       <div className="container mx-auto mb-20 text-center">
//         <Typography variant="h1" color="blue-gray" className="mb-4">
//           Contacts
//         </Typography>
//       </div>
//       <div>
//         <Card shadow={true} className="container mx-auto border border-gray/50">
//           <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
//             <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
//               <Typography variant="h4" color="white" className="mb-2">
//                 Contact Information
//               </Typography>
//               <div className="flex my-2 gap-5">
//                 <EnvelopeIcon className="h-6 w-6 text-white" />
//                 <Typography variant="h6" color="white" className="mb-2">
//                   indanisukma@gmail.com
//                 </Typography>
//               </div>
//               <div className="flex mb-10 gap-5">
//                 <MapPinIcon className="h-6 w-6 text-white" />
//                 <Typography variant="h6" color="white" className="mb-2">
//                   Abiansemal, Badung, Bali, Indonesia
//                 </Typography>
//               </div>
//               <div className="flex items-center gap-5">
//                 <IconButton variant="text" color="white">
//                   <i className="fa-brands fa-facebook text-lg" />
//                 </IconButton>
//                 <IconButton variant="text" color="white">
//                   <i className="fa-brands fa-instagram text-lg" />
//                 </IconButton>
//                 <IconButton variant="text" color="white">
//                   <i className="fa-brands fa-github text-lg" />
//                 </IconButton>
//               </div>
//             </div>
//             <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
//               <form action="#">
//                 <div className="mb-8 grid gap-4 lg:grid-cols-2">
//                   {/* @ts-ignore */}
//                   <Input
//                     color="gray"
//                     size="lg"
//                     variant="static"
//                     label="First Name"
//                     name="first-name"
//                     placeholder="eg. Lucas"
//                     containerProps={{
//                       className: "!min-w-full mb-3 md:mb-0",
//                     }}
//                   />
//                   {/* @ts-ignore */}
//                   <Input
//                     color="gray"
//                     size="lg"
//                     variant="static"
//                     label="Last Name"
//                     name="last-name"
//                     placeholder="eg. Jones"
//                     containerProps={{
//                       className: "!min-w-full",
//                     }}
//                   />
//                 </div>
//                 {/* @ts-ignore */}
//                 <Input
//                   color="gray"
//                   size="lg"
//                   variant="static"
//                   label="Email"
//                   name="first-name"
//                   placeholder="eg. lucas@mail.com"
//                   containerProps={{
//                     className: "!min-w-full mb-8",
//                   }}
//                 />
//                 <Typography
//                   variant="lead"
//                   className="!text-blue-gray-500 text-sm mb-2"
//                 >
//                   What are you interested on?
//                 </Typography>
//                 <div className="-ml-3 mb-14 ">
//                   {/* @ts-ignore */}
//                   <Radio
//                     color="gray"
//                     name="type"
//                     label="Design"
//                     defaultChecked
//                   />
//                   {/* @ts-ignore */}
//                   <Radio color="gray" name="type" label="Development" />
//                   {/* @ts-ignore */}
//                   <Radio color="gray" name="type" label="Support" />
//                   {/* @ts-ignore */}
//                   <Radio color="gray" name="type" label="Other" />
//                 </div>
//                 {/* @ts-ignore */}
//                 <Textarea
//                   color="gray"
//                   size="lg"
//                   variant="static"
//                   label="Your Message"
//                   name="first-name"
//                   containerProps={{
//                     className: "!min-w-full mb-8",
//                   }}
//                 />
//                 <div className="w-full flex justify-end">
//                   <Button className="w-full md:w-fit" color="gray" size="md">
//                     Send message
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </CardBody>
//         </Card>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;

"use client";

import React, { useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
  Dialog,
} from "@material-tailwind/react";
import { EnvelopeIcon, MapPinIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  // State untuk melacak status pengiriman (loading, sukses, atau error)
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah website pindah ke halaman Formspree
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // GANTI URL DI BAWAH INI DENGAN LINK FORMSPREE ANDA!
      const response = await fetch("https://formspree.io/f/mwlkbwng", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Mengosongkan form setelah berhasil
      } else {
        setStatus("error");
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus("error");
      alert("Oops! There was a problem submitting your form.");
    }
  };

  const closePopup = () => setStatus("");

  return (
    <section id="contact" className="px-8 pb-16 pt-10 scroll-mt-20">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contacts
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white shrink-0" />
                <Typography variant="h6" color="white" className="mb-2 break-all">
                  indanisukma@gmail.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <MapPinIcon className="h-6 w-6 text-white shrink-0" />
                <Typography variant="h6" color="white" className="mb-2">
                  Abiansemal, Badung, Bali, Indonesia
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              
              {/* Form sekarang menggunakan fungsi onSubmit, bukan action HTML */}
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Name"
                    name="Name"
                    placeholder="eg. Lucas Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    required
                  />
                </div>
                
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="Email"
                  type="email"
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                  required
                />
                
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="Message"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                  required
                />
                
                <div className="w-full flex justify-end">
                  <Button 
                    type="submit" 
                    className="w-full md:w-fit" 
                    color="gray" 
                    size="md"
                    disabled={status === "submitting"} // Tombol mati saat loading
                  >
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>

            </div>
          </CardBody>
        </Card>
      </div>

      {/* Pop-up (Dialog) Sukses */}
      <Dialog 
        open={status === "success"} 
        handler={closePopup} 
        size="sm"
        className="bg-white rounded-xl shadow-2xl p-6 text-center"
      >
        <div className="flex justify-center mb-4 mt-4">
          <CheckCircleIcon className="h-16 w-16 text-green-500" />
        </div>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Message Sent!
        </Typography>
        <Typography className="mb-8 font-normal text-gray-600">
          Thank you for reaching out. I have received your message and will get back to you shortly.
        </Typography>
        <Button color="gray" onClick={closePopup} className="w-full">
          Close
        </Button>
      </Dialog>

    </section>
  );
}

export default ContactForm;