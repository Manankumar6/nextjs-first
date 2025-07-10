import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide icons

const images = [
  { src: "/image/foodcafe.png", span: "md:col-span-1" },
  { src: "/imggallery/9.png", span: "md:col-span-2" },
  { src: "/imggallery/10.png", span: "md:col-span-1" },
  { src: "/imggallery/11.png", span: "md:col-span-2" },
  { src: "/imggallery/12.png", span: "md:col-span-2" },
  { src: "/imggallery/13.png", span: "md:col-span-1" },
  { src: "/imggallery/1.png", span: "md:col-span-2" },
  { src: "/imggallery/2.png", span: "md:col-span-1" },
  { src: "/imggallery/3.png", span: "md:col-span-1" },
  { src: "/imggallery/6.png", span: "md:col-span-2" },
  { src: "/imggallery/8.png", span: "col-span-2" },
  { src: "/imggallery/7.png", span: "col-span-2 md:col-span-1" },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open image in full view
  const openImage = (index) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  // Close full image view
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Navigate to next image
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].src);
  };

  // Navigate to previous image
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].src);
  };

  return (
    <div id="food-cafe" className="bg-background  dark:bg-grid-small-white/[0.2] min-h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Project Image Showcase
            </h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Explore a collection of high-quality images showcasing different aspects of my project.  
              Each preview highlights key features, UI designs, and creative elements that make this project stand out.
            </p>
          </div>
        </div>

        {/* Gallery Grid with Different Image Sizes */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${image.span}`}
              onClick={() => openImage(index)}
            >
              <img
                src={image.src}
                alt={index}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 cursor-pointer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70  overflow-hidden h-full ">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeImage}
          >
            <X />
          </button>

          {/* Previous Button */}
          <button
           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl md:left-8 z-20"
            onClick={prevImage}
          >
            <ChevronLeft />
          </button>

          {/* Image */}
          <div className="relative  max-w-full max-h-full overflow-hidden">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-auto max-w-7xl max-h-7xl rounded-lg object-contain mx-auto"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-4xl"
            onClick={nextImage}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
