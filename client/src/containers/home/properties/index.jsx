import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../../../components/section-title";
import { useGetAllNestsQuery } from "../../../services/nest";
import Filter from "./filter";
import Property from "./property";
import { useSelector } from "react-redux";

const initialFilterData = {
  isApplied: false,
  search: "",
  city: "",
  type: "",
  bedroom: "",
  bathroom: "",
};
const Properties = () => {
  const [filterData, setFilterData] = useState(initialFilterData);
  const { data: properties = [] } = useGetAllNestsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const store = {
    filterData: useSelector((state) => state.filter),
  };

  const handleSetFilter = (key, value) => {
    setFilterData((prev) => ({ ...prev, isApplied: true, [key]: value }));
  };

  const handleResetFilter = () => {
    setFilterData(initialFilterData);
  };

  useEffect(() => {
    setFilterData((prev) => ({ ...prev, ...store.filterData }));
  }, [store.filterData]);

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        if (!filterData.isApplied) return true;
        return (
          (filterData.search &&
            property.title
              .toLowerCase()
              .includes(filterData.search.toLowerCase())) ||
          (filterData.city &&
            property.city.toLowerCase() === filterData.city.toLowerCase()) ||
          (filterData.type &&
            Number(property.userActionType) === Number(filterData.type)) ||
          (filterData.bedroom &&
            Number(property.bedroomCount) === Number(filterData.bedroom)) ||
          (filterData.bathroom &&
            Number(property.bathroomCount) === Number(filterData.bathroom))
        );
      }),
    [filterData, properties]
  );

  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <SectionTitle title="Search Properties" />
      <div className="py-5 w-full px-10">
        <Filter
          filterData={filterData}
          setFilterData={handleSetFilter}
          resetFilterData={handleResetFilter}
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full px-10"
        id="properties"
      >
        {filteredProperties.map((property) => (
          <Property key={property.title} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
