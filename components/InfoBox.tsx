import Link from "next/link";

interface Props {
  title: string;
  description: string;
  href: string;
  backgroundColor: string;
  textColor: string;
  btnInfo: {
    text: string;
    bgColor: string;
    textColor: string;
  };
}

const InfoBox = ({
  title,
  description,
  href,
  btnInfo,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
}: Props) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl font-bold ${textColor} `}>{title}</h2>
      <p className={`mt-2 mb-4 ${textColor} `}>{description}</p>
      <Link href={href}>
        <button
          className={`inline-block ${btnInfo.bgColor} ${btnInfo.textColor} rounded-lg px-4 py-2 hover:opacity-80`}
        >
          {btnInfo.text}
        </button>
      </Link>
    </div>
  );
};
export default InfoBox;
