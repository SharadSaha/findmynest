import React, { useState } from "react";
import FMNSingleSelect from "../../../../components/generic/single-select";
import { useGetCityListQuery } from "../../../../services/nest";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [bedroomFilter, setbedroomFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [schoolFilter, setschoolFilter] = useState("");

  const { data: cityList = [] } = useGetCityListQuery();
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center w-full flex-1">
      <div className="flex-1 w-full">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
      </div>
      <div className="flex-1 w-full">
        <FMNSingleSelect
          value={areaFilter}
          placeholder="Select City"
          setValue={(value) => setAreaFilter(value)}
          options={cityList.map((city, index) => ({
            id: index,
            value: city,
          }))}
        />
      </div>
      <div className="flex-1 w-full">
        <FMNSingleSelect
          value={bedroomFilter}
          setValue={(value) => setbedroomFilter(value)}
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
          value={typeFilter}
          placeholder="Select Type"
          setValue={(value) => setTypeFilter(value)}
          options={[
            { id: "rent", value: "Rent" },
            { id: "buy", value: "Buy" },
          ]}
        />
      </div>
      <div className="flex-1 w-full">
        <FMNSingleSelect
          value={schoolFilter}
          setValue={(value) => setschoolFilter(value)}
          options={[
            { id: "0", value: "0" },
            { id: "1", value: "1" },
            { id: "2", value: "2" },
            { id: "3", value: "3" },
          ]}
        />
      </div>
      {isFilterActive ? (
        <FilterAltIcon
          className="cursor-pointer"
          onClick={() => setIsFilterActive(false)}
        />
      ) : (
        <FilterAltOffIcon
          className="cursor-pointer"
          onClick={() => setIsFilterActive(true)}
        />
      )}
    </div>
  );
};

export default Filter;
