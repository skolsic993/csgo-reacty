const TournamentHeaderCard = ({
  subtitle,
  title,
  children,
  image,
  icon,
}: {
  subtitle: string;
  title: string;
  children: React.ReactNode;
  image?: string;
  icon?: string;
}) => {
  return (
    <div className="col-12 md:col-6 lg:col-6 xl:col-3 ">
      <div className="surface-card shadow-2 p-4 border-round flex">
        <div
          className="flex align-items-center justify-content-center bg-indigo-500 border-round mb-1"
          style={{ width: "3rem", height: "3rem" }}
        >
          {image && <img src={image} alt="Icon" className="w-6" />}
          {icon && <i className={`pi text-indigo-50 text-xl ${icon}`}></i>}
        </div>
        <div className="flex flex-column justify-content-between ml-3 w-7rem">
          <span className="block text-500 text-sm">{subtitle}</span>
          <div className="text-900 font-medium text-xl relative">
            {title}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentHeaderCard;
