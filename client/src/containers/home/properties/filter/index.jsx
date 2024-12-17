import React, { useState } from "react";
import FMNSingleSelect from "../../../../components/generic/single-select";
import FMNButton from "../../../../components/generic/button";

const Filter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  return (
    <form onSubmit={() => null}>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex-1">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <FMNSingleSelect
            value={areaFilter}
            setValue={(value) => setAreaFilter(value)}
            options={[
              { id: "London", value: "London" },
              { id: "Manchester", value: "Manchester" },
              { id: "Birmingham", value: "Birmingham" },
            ]}
          />
        </div>
        <div className="flex-1">
          <FMNSingleSelect
            value={locationFilter}
            setValue={(value) => setLocationFilter(value)}
            options={[
              { id: "London", value: "London" },
              { id: "Manchester", value: "Manchester" },
              { id: "Birmingham", value: "Birmingham" },
            ]}
          />
        </div>
        <div className="flex-1">
          <FMNSingleSelect
            value={typeFilter}
            setValue={(value) => setTypeFilter(value)}
            options={[
              { id: "London", value: "London" },
              { id: "Manchester", value: "Manchester" },
              { id: "Birmingham", value: "Birmingham" },
            ]}
          />
        </div>
        <div className="flex-1">
          <FMNSingleSelect
            value={priceFilter}
            setValue={(value) => setPriceFilter(value)}
            options={[
              { id: "London", value: "London" },
              { id: "Manchester", value: "Manchester" },
              { id: "Birmingham", value: "Birmingham" },
            ]}
          />
        </div>
        <FMNButton>Apply Filters</FMNButton>
      </div>
    </form>
  );
};

export default Filter;
