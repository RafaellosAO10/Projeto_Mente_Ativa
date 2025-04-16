import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Wifi } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  hasWifi?: boolean;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  hasWifi = false,
  link = "",
}) => {
  return (
    <Card className="service-card flex flex-col h-full">
      <div className="relative h-48 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {hasWifi && (
          <div className="absolute top-2 right-2 bg-navy text-white p-1 rounded-md flex items-center">
            <Wifi size={16} className="mr-1" /> Wi-Fi
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
        {link && (
          <Link to={link} className="block w-full">
            <Button className="w-full bg-navy hover:bg-navy/90">
              Saiba mais
            </Button>
          </Link>
        )}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
