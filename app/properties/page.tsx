import PropertyCard from "@/components/PropertyCard";
import { IProperty } from "@/utils/types";
import axios from "axios";

export const getProperties = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
    );
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

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
              <PropertyCard property={property} key={property._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default PropertiesPage;
