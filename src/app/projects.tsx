"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils"; 

const PROJECTS = [
  {
    img: "/image/rupa-tipat.png", 
    title: "Rupa Tipat - Balinese Ketupat Classification App",
    tools: "Deep Learning, EfficietNetV2, Multi-Head Self-Attention, Kotlin, Android Studio",
    desc: "Deep Learning Hybrid Model & Android Application for Balinese Ketupat Classification.",
    details: "Rupa Tipat is an intelligent mobile application designed as a 'Digital Window to Ancestral Heritage' to preserve and document Balinese culture through automated ketupat (tipat) recognition. The project focuses on classifying 13 distinct types of Balinese tipat using a hybrid deep learning architecture that combines a pre-trained CNN backbone with a custom classification head featuring Transformer (Multi-Head Self-Attention) layers. Image preprocessing is handled manually via OpenCV for precise resizing and normalization before feature extraction. As a key innovation, the system integrates the multimodal Google Gemini 2.5 Flash LLM to generate interactive, educational descriptions for each detected object. The final trained model is sequentially converted from .h5 to .tflite format, ensuring lightweight and optimal on-device inference within the native Android application developed using Kotlin, creating an accessible digital learning tool for preserving Balinese traditions."
  },
  {
    img: "/image/ajeg-bali.png", 
    title: "Ajeg Bali Lens",
    tools: "Deep Learning, Kotlin, Android Studio",
    desc: "Deep Learning & Computer Vision Application for Jejahitan, Ketupat, and Wayang Bali Preservation.",
    details: "Ajeg Bali Lens is an innovative mobile application designed to document and preserve Balinese cultural heritage through advanced computer vision technology. The project focuses on the automated recognition of diverse traditional objects, specifically Jejahitan, Ketupat, and Wayang Bali. To achieve high precision in object detection and classification, the system integrates a robust machine learning architecture utilizing a combination of state-of-the-art models, including MobileViTv2, EfficientNetV2, and YOLOv11. Designed as an interactive educational tool and a comprehensive digital documentation platform, the application provides users with rich cultural context and learning resources upon scanning an object. Recognized for its significant contribution to cultural preservation and technological implementation, Ajeg Bali Lens successfully earned second place at the Badung Festival of Innovation."
  },
  {
    img: "/image/chatbot.png", 
    title: "ChatBot Budaya Bali: Balinese Culture Exploration Assistant",
    tools: "RAG, FAISS, LLM, Python",
    desc: "Bilingual RAG-Based Virtual Assistant for Balinese Cultural Preservation.",
    details: "ChatBot Budaya Bali is an innovative web-based virtual assistant designed to preserve and promote local heritage by answering questions about Balinese culture, traditions, and arts contextually and multilingually. The system leverages a bilingual Retrieval-Augmented Generation (RAG) architecture, backed by a knowledge base of 714 English and Indonesian articles scraped from budayabali.com. Text data is vectorized using Cohere's embed-multilingual-v3.0 and stored in a FAISS VectorStore to enable deep semantic search based on the meaning of the query rather than simple keyword matching. Driven by a FastAPI backend, the system automatically detects user languages via langdetect and translates queries using deep_translator to ensure seamless cross-lingual interactions. To formulate accurate, polite, and traceable responses, the chatbot utilizes OpenAI's GPT-4.1 Nano generative model. The user experience is delivered through a responsive frontend built with React and Next.js, featuring conversation history via localStorage, direct source article displays, and robust out-of-domain handling, creating an accessible digital bridge to safeguard Balinese traditions across different generations and languages."
  },
  {
    img: "/image/ai.png", 
    title: "AI-Powered Image Editor",
    tools: "Python, Deep Learning",
    desc: "AI-Driven Web Application for Creative Photo Editing and Style Transfer.",
    details: "The AI-Powered Image Editor is an advanced web-based application designed to provide users with creative, automated image manipulation tools. In this project, I was responsible for developing and integrating a suite of AI-driven features, specifically implementing a Sketch converter, Selfie Cartoonizer, Ghibli Style transfer, Background Maker, and Background Changer. The development process involved building an intuitive user interface (UI) and seamlessly connecting external AI APIs to process user-uploaded images in real time."
  },
  {
    img: "/image/collision.png", 
    title: "Accident and Speed Detection",
    tools: "Deep Learning, YOLOv11, Python",
    desc: "YOLOv11n and ByteTrack-Based Application for Real-Time Vehicle Speed Estimation and Collision Recognition.",
    details: "Accident Detection is an automated computer vision system developed to monitor road traffic by estimating vehicle speeds and recognizing collision incidents in real time. Designed to run efficiently on resource-constrained hardware like standard CCTV cameras without requiring high-end GPUs, the project utilizes the lightweight YOLOv11n architecture for rapid multi-object detection, specifically identifying cars, buses, motorcycles, and trucks. The model was trained in two distinct phases using Roboflow datasets: an initial baseline training with 13,000 accident images, followed by targeted fine-tuning using a broader 25,000-image dataset to improve generalization across 18 specialized classes. To track individual vehicles consistently across continuous video frames, the system integrates the ByteTrack multi-object tracking algorithm. Real-time speed estimation is handled via OpenCV by measuring the spatial shift of vehicle centroids between frames and converting those pixel distances into kilometers per hour (km/h) using perspective correction. Potential accidents are actively flagged by analyzing irregular object states and Intersection over Union (IoU) overlaps, visually isolating them with a red 'Collision' warning label. Achieving an mAP@0.5 score of 0.79 and a maximum F1-score of 0.75, this system delivers a highly accurate, cost-effective solution tailored for modern smart city transportation and automated early warning safety platforms."
  },
  {
    img: "/image/brain.png", 
    title: "Brain Tumor MRI Classification",
    tools: "Deep Learning, TensorFlow, CNN",
    desc: "Ensemble Transfer Learning Web Application for 17-Class Brain Tumor Recognition.",
    details: "The Brain Tumor MRI Classification project is an advanced medical image analysis system designed to automatically categorize 17 distinct types of brain anomalies, including Carcinoma, Glioblastoma, Meningioma, and Pituitary tumors. Built to assist medical professionals in rapid and precise diagnostics, the system utilizes a robust ensemble deep learning architecture combining EfficientNetB4 and MobileNetV2, which successfully achieved an outstanding accuracy of 96% on a complex dataset of 17,000 MRI images. The development pipeline incorporates comprehensive preprocessing techniques such as contour detection, cropping, and Contrast Limited Adaptive Histogram Equalization (CLAHE) to clarify tissue boundaries alongside transfer learning and fine-tuning strategies to optimize feature extraction. Deployed as an interactive web application via Gradio, the platform not only delivers real-time probabilistic classification but also integrates Saliency Mapping. This explainable AI feature generates an attention heatmap over the uploaded MRI, visually highlighting the critical Regions of Interest (ROI) that drove the model's decision, thereby providing an accessible, transparent, and highly accurate digital diagnostic tool."
  },
  {
    img: "/image/captioning.png", 
    title: "Image Captioning Bali Souvenir",
    tools: "CNN, RNN, Python, GenAI",
    desc: "Comparative encoder–decoder for Automated Indonesian Image Description.",
    details: "The Bali Souvenir Image Captioning project is an advanced computer vision and natural language processing system developed to automatically generate descriptive Indonesian text for Balinese cultural products. Utilizing a dataset of 4,500 images across 15 distinct souvenir categories, the study conducts a rigorous comparative analysis between a traditional CNN-RNN hybrid model (VGG16 combined with Bidirectional LSTM) and a state-of-the-art, fully Transformer-based architecture (Vision Transformer and IndoBERT). The system implements both Greedy Search and Beam Search (k=3) decoding strategies to optimize the generated sentences. Comprehensive evaluations using BLEU, METEOR, ROUGE-L, and CIDEr metrics demonstrate that the ViT-IndoBERT model significantly outperforms the VGG16-BiLSTM architecture, offering superior semantic richness, precise visual detail extraction, and robust resistance against background bias. To ensure practical usability, the trained models are deployed within an interactive web application using Gradio, which also integrates OpenAI's GPT-3.5 for post-processing the raw captions into fluent, marketing-ready narratives. This project successfully bridges complex visual recognition with precise linguistic modeling to document and promote local cultural heritage."
  },
  {
    img: "/image/havana.png", 
    title: "Havana E-Commerce Platform",
    tools: "PHP, Laravel, MySQL",
    desc: "Laravel-Based Web Application for Online Bag Shopping and Management.",
    details: "Havana is a dynamic e-commerce web application developed to provide a seamless and elegant online shopping experience for premium bags. Built using the Laravel PHP framework, alongside HTML5, CSS, JavaScript, and Bootstrap for a responsive front-end, the platform offers an intuitive interface tailored for both users and administrators. The user-facing storefront features categorized product catalogs specifically for shoulder bags, tote bags, and sling bags as well as detailed single product views, an interactive shopping cart, and a checkout process that efficiently redirects users to WhatsApp for payment handling. On the backend, the system includes a comprehensive administrative dashboard for robust store management, allowing admins to easily add, update, and delete products and categories, while also tracking customer orders and updating payment and delivery statuses. The application's underlying architecture is supported by a well-structured Physical Data Model (PDM) that manages users, carts, categories, products, and orders, making Havana.id a complete and functional solution for modern digital retail."
  }
];

export function Projects() {
  return (
    <section id="project" className="px-8 pb-20 pt-10 scroll-mt-20">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Showcasing recent implementations in computer vision, deep learning, and mobile deployment.
        </Typography>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;