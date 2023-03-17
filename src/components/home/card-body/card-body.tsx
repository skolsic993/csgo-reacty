export const CardBody = ({
  image,
  icon,
  title,
  value,
  secondImage,
  secondIcon,
  subtitle,
  secondValue,
  stats,
  showPercentage,
}: {
  image?: boolean;
  icon?: string;
  title: string;
  value: number;
  secondImage?: boolean;
  secondIcon: string;
  subtitle: string;
  secondValue: number;
  stats?: boolean;
  showPercentage?: boolean;
}) => {
  return (
    <div className="flex flex-wrap">
      <div className={`flex mt-4 ${stats && "mb-4"}`}>
        <div
          className="flex align-items-center justify-content-center bg-indigo-500 border-round"
          style={{ width: "2.5rem", height: "2.5rem" }}
        >
          {image ? (
            <img src="/images/trophy.png" alt="Trophy" className="w-6" />
          ) : (
            <i
              className="pi text-red-300 pi-flag"
              style={{ fontSize: "1.5rem" }}
            ></i>
          )}
        </div>
        <div className="ml-2">
          <span className="block text-500 text-sm mb-1"> {title} </span>
          <span className="block text-500 text-indigo-400 font-medium">
            {" "}
            {value}{" "}
          </span>
        </div>
        <div className="flex flex-direction-row ml-4">
          <div
            className="flex align-items-center justify-content-center bg-yellow-500 border-round"
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            {secondImage ? (
              <img src="/images/up.png" alt="Up" />
            ) : (
              <i
                className={`pi text-pink-50  ${secondIcon}`}
                style={{ fontSize: "1.5rem" }}
              ></i>
            )}
          </div>
          <div className="ml-2">
            <span className="block text-500 text-sm mb-1"> {subtitle} </span>
            <span className="block text-500 text-yellow-400 font-medium">
              {" "}
              {secondValue}
              {showPercentage ? "K" : ""}{" "}
            </span>
          </div>
        </div>
      </div>
      {stats && (
        <div className="flex flex-column justify-content-center align-items-center w-full">
          <img
            src="images/stats.png"
            alt="Statistics"
            className="w-full h-10rem"
            style={{ objectFit: "cover" }}
          />
          <span className="block text-500 text-sm mt-1">Match statistics</span>
        </div>
      )}
    </div>
  );
};
