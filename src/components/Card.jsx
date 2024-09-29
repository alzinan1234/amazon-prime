import React from "react";
import Image from "next/image";

const Card = () => {
  const card = [
    {
      id: 1,
      image: "./image/MLP_ROW_Muti-title_Mag1._CB1564087979_.jpg", // Corrected path
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      image: "./image/PV_Benefits_Devices_UPDATED.png", // Corrected path
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      image: "./image/PV_Benefits_Devices_UPDATED.png", // Corrected path
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
            alt={item.title}
            width={500}
            height={300} // Adjust width/height based on your design
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
