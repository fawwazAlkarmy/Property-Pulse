import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            href="/properties"
            title="For Renters"
            description="Find your dream rental property. Bookmark properties and contact
              owners."
            btnInfo={{
              bgColor: "bg-black",
              text: "Browse Properties",
              textColor: "text-white",
            }}
            textColor="text-black"
            backgroundColor="bg-gray-100"
          />
          <InfoBox
            href="/properties/add"
            title="For Property Owners"
            description="List your properties and reach potential tenants. Rent as an
            airbnb or long term."
            btnInfo={{
              bgColor: "bg-blue-500",
              text: " Add Property",
              textColor: "text-white",
            }}
            textColor="text-black"
            backgroundColor="bg-blue-100"
          />
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
