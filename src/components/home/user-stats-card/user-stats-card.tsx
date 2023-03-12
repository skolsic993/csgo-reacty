const UserStatsCard = ({
  title,
  rate,
  average,
  icon,
  text,
  streak,
}: {
  title?: string;
  rate?: string;
  average?: string;
  icon?: string;
  text?: string;
  streak?: string[];
}) => {
  const streakValues = streak?.map((item: string) => {
    return +item > 0 ? item.replace("1", "w") : item.replace("0", "l");
  });

  return (
    <div className="col-12 md:col-6 lg:col-6 xl:col-3">
      <div className="surface-card shadow-2 p-3 border-round">
        <div className="flex justify-content-between mb-3">
          <div>
            <span className="block text-500 font-medium mb-3">{title}</span>
            <div className="text-900 font-medium text-xl">{rate}</div>
          </div>
          <div
            className="flex align-items-center justify-content-center bg-blue-100 border-round"
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            <i className={`pi ${icon} text-blue-500 text-xl`}></i>
          </div>
        </div>
        {streak &&
          streakValues?.map((item: string) => (
            <span
              key={Math.random()}
              className={`${
                item === "w" ? " text-green-500 " : " text-red-500 "
              } uppercase`}
            >
              {item + " "}
            </span>
          ))}

        {average && (
          <span
            className={`${
              average && +average?.replace("%", "") >= 50
                ? "text-green-500"
                : "text-red-500"
            } font-medium`}
          >
            {average + "%"}
          </span>
        )}

        <span>{text}</span>
      </div>
    </div>
  );
};

export default UserStatsCard;
