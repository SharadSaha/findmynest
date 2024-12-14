import { Outlet, useParams } from "react-router-dom";
import Filter from "./filter";
import Property from "./property";
import Header from "./header";

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold tracking-wide text-gray-800 pb-5 border-b border-gray-300">
    <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
      {title}
    </span>
  </h2>
);

const Home = () => {
  const { propertyId = "" } = useParams();
  const properties = [
    {
      id: 1,
      name: "Luxury Villa",
      description: "A beautiful luxury villa with a stunning ocean view.",
      location: "Malibu, California",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Modern Apartment",
      description: "A sleek modern apartment in the heart of the city.",
      location: "New York, New York",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Cozy Cabin",
      description: "A cozy cabin surrounded by nature.",
      location: "Aspen, Colorado",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Luxury Villa",
      description: "A beautiful luxury villa with a stunning ocean view.",
      location: "Malibu, California",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Modern Apartment",
      description: "A sleek modern apartment in the heart of the city.",
      location: "New York, New York",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Cozy Cabin",
      description: "A cozy cabin surrounded by nature.",
      location: "Aspen, Colorado",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Luxury Villa",
      description: "A beautiful luxury villa with a stunning ocean view.",
      location: "Malibu, California",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Modern Apartment",
      description: "A sleek modern apartment in the heart of the city.",
      location: "New York, New York",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Cozy Cabin",
      description: "A cozy cabin surrounded by nature.",
      location: "Aspen, Colorado",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      name: "Luxury Villa",
      description: "A beautiful luxury villa with a stunning ocean view.",
      location: "Malibu, California",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "Modern Apartment",
      description: "A sleek modern apartment in the heart of the city.",
      location: "New York, New York",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Cozy Cabin",
      description: "A cozy cabin surrounded by nature.",
      location: "Aspen, Colorado",
      imageUrl:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
  return propertyId ? (
    <Outlet />
  ) : (
    <div className="flex flex-col justify-center items-center w-full gap-5 pt-5">
      <Header />
      <Filter />
      <SectionTitle title="Your posts" />
      <div className="flex flex-wrap justify-center gap-5 pb-5 w-full h-full">
        {properties.map((property) => (
          <Property key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
