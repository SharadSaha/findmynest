import SectionTitle from "../../../components/section-title";
import { useGetAllNestsQuery } from "../../../services/nest";
import Filter from "./filter";
import Property from "./property";

const Properties = () => {
  const { data: properties = [] } = useGetAllNestsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <SectionTitle title="Search Properties" />
      <div className="py-5 w-full px-10">
        <Filter />
      </div>
      <div className="flex flex-col px-10 gap-5 w-full">
        {properties.map((property) => (
          <Property key={property.title} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
