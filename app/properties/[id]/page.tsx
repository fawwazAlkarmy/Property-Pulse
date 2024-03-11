"use client";
import Spinner from "@/components/Spinner";
import { getProperty } from "@/utils/api-requests";
import { IProperty } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useQuery<IProperty | null>({
    queryKey: ["property", params.id],
    queryFn: () => getProperty(params.id as string),
    enabled: !!params.id,
  });
  const property = data;
  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {isLoading && <Spinner loading={isLoading} />}
      {error && (
        <h1 className="text-center text-2xl font-bold mt-10">
          {error.message}
        </h1>
      )}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
    </>
  );
};
export default PropertyPage;
