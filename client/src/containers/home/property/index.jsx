const Property = ({ name, description, imageUrl }) => {
  return (
    <div
      className="flex relative max-w-[280px] max-h-[320px] w-full h-full rounded-2xl bg-center bg-cover duration-500 group cursor-pointer"
      style={{
        boxShadow: "0 7px 10px rgba(0,0,0,0.30), 0 5px 5px rgba(0,0,0,0.22)",
      }}
    >
      <img
        className="w-full h-full rounded-2xl group-hover:brightness-75"
        src={imageUrl}
        alt={name}
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white w-full overflow-hidden text-sm font-regular">
        <div className="truncate font-bold">{name}</div>
        <div className="truncate">{description}</div>
      </div>
    </div>
  );
};

export default Property;
