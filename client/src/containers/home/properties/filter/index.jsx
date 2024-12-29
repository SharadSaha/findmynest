import React from "react";
import FMNSingleSelect from "../../../../components/generic/single-select";
import { useGetCityListQuery } from "../../../../services/nest";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Filter = ({ filterData, setFilterData, resetFilterData }) => {
  const { data: cityList = [] } = useGetCityListQuery();

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center w-full flex-1">
      <div className="flex-1 w-full flex-col gap-1">
        <span className="text-gray-500 text-sm required">Title</span>
        <input
          type="search"
          value={filterData.search}
          onChange={(e) => setFilterData("search", e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="flex-1 w-full">
        <FMNSingleSelect
          value={filterData.city}
          placeholder="Select City"
          label="City"
          setValue={(value) => setFilterData("city", value)}
          options={cityList.map((city, index) => ({
            id: index,
            value: city,
          }))}
        />
      </div>
      <div className="flex-1 w-full">
        <FMNSingleSelect
          value={filterData.bedroom}
          label="No of Bedrooms"
          setValue={(value) => setFilterData("bedroom", value)}
          options={[
            { id: "0", value: "0" },
            { id: "1", value: "1" },
            { id: "2", value: "2" },
            { id: "3", value: "3" },
          ]}
        />
      </div>
      <div className="flex-1 w-full">
        <FMNSingleSelect
          value={filterData.type}
          label="Type"
          placeholder="Select Type"
          setValue={(value) => setFilterData("type", value)}
          options={[
            { id: "rent", value: "Rent" },
            { id: "buy", value: "Buy" },
          ]}
        />
      </div>
      <div className="flex-1 w-full">
        <FMNSingleSelect
          label="No of bathrooms"
          value={filterData.bathroom}
          setValue={(value) => setFilterData("bathroom", value)}
          options={[
            { id: "0", value: "0" },
            { id: "1", value: "1" },
            { id: "2", value: "2" },
            { id: "3", value: "3" },
          ]}
        />
      </div>
      {!filterData.isApplied ? (
        <FilterAltIcon
          className="cursor-pointer"
          onClick={() => setFilterData("isApplied", true)}
        />
      ) : (
        <FilterAltOffIcon
          className="cursor-pointer"
          onClick={() => resetFilterData()}
        />
      )}
    </div>
  );
};

export default Filter;
