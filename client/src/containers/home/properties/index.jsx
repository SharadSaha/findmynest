import SectionTitle from "../../../components/section-title";
import Filter from "./filter";
import Property from "./property";

const Properties = () => {
  const dummyProperties = [
    {
      id: "1",
      title: "Luxury Apartment",
      price: 200000,
      imgUrls: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://example.com/image2.jpg",
      ],
      lat: "34.0522",
      long: "-118.2437",
      address: "123 Main St",
      city: "Los Angeles",
      bedroomCount: 3,
      bathroomCount: 2,
      utilities: "Water, Electricity",
      petsPolicy: "Pets Allowed",
      incomePolicy: "Income Verification Required",
      size: 1200,
      schoolCount: 5,
      busCount: 3,
      restaurantCount: 10,
      userActionType: "buy",
      nestType: "apartment",
      description: "A beautiful luxury apartment in the heart of the city.",
    },
    {
      id: "2",
      title: "Cozy Studio",
      price: 100000,
      imgUrls: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      lat: "40.7128",
      long: "-74.0060",
      address: "456 Elm St",
      city: "New York",
      bedroomCount: 1,
      bathroomCount: 1,
      utilities: "Electricity",
      petsPolicy: "No Pets",
      incomePolicy: "No Income Verification",
      size: 500,
      schoolCount: 2,
      busCount: 5,
      restaurantCount: 20,
      userActionType: "buy",
      nestType: "studio",
      description: "A cozy studio apartment with a great view.",
    },
    {
      id: "3",
      title: "Spacious House",
      price: 500000,
      imgUrls: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://example.com/image5.jpg",
      ],
      lat: "51.5074",
      long: "-0.1278",
      address: "789 Maple Ave",
      city: "London",
      bedroomCount: 4,
      bathroomCount: 3,
      utilities: "Water, Gas, Electricity",
      petsPolicy: "Pets Allowed",
      incomePolicy: "Income Verification Required",
      size: 2500,
      schoolCount: 8,
      busCount: 4,
      restaurantCount: 15,
      userActionType: "buy",
      nestType: "house",
      description: "A spacious house with a large backyard.",
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <SectionTitle title="Search Properties" />
      <div className="py-5">
        <Filter />
      </div>
      <div className="flex flex-col px-10 gap-5 w-full">
        {dummyProperties.map((property) => (
          <Property key={property.title} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
