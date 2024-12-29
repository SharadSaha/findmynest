import { nestIcon } from "../../assets/images";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-5">
      <div className="flex justify-center items-center gap-4">
        <img src={nestIcon} className="max-w-[100px]" />
        <h3 className="text-3xl font-bold text-center leading-snug tracking-wide md:text-5xl md:leading-tight md:tracking-normal">
          About <span className="text-blue-500">FindMyNest</span>
        </h3>
      </div>

      <p className="text-lg text-center text-gray-700 leading-relaxed max-w-xl rounded-xl border border-gray-300 p-5">
        <span className="font-semibold">FindMyNest</span> is a property search
        application which is designed to help users find their desired
        properties easily. The application allows users to search for properties
        based on various parameters such as{" "}
        <span className="font-medium">location</span>,{" "}
        <span className="font-medium">price</span>, and{" "}
        <span className="font-medium">amenities</span>. The search results are
        displayed on a map and the details of each property are displayed below
        the map. The application also allows users to{" "}
        <span className="underline">favourite</span> properties and view their
        favourites later.
      </p>
    </div>
  );
};

export default About;
