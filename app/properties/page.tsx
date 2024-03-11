import PropertyCard from "@/components/PropertyCard";
import { getProperties } from "@/utils/api-requests";
import { IProperty } from "@/utils/types";

const PropertiesPage = async () => {
  const properties: IProperty[] = await getProperties();
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties === undefined || properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties?.map((property) => (
              <PropertyCard property={property} key={property.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;
