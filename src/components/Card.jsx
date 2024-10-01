import React from "react";
import Image from "next/image";

const Card = () => {
  const card = [
    {
      id: 1,
      image: "/image/PV_Benefits_Download_UPDATED.png", // Corrected path for Next.js public folder
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      image: "/image/PV_Benefits_Devices_UPDATED.png", // Corrected path
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      image: "/image/PV_Benefits_DataSaver_UPDATED.png", // Corrected path
      title: "Title 3",
      description: "Description 3",
    },
  ];

  return (
    <div>
      {card.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 mt-10">
          <Image
            src={item.image}
            alt={item.title} // Improved accessibility with alt text
            width={500}
            height={300}
            className="w-full h-auto" // Ensures responsive image scaling
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
