const CardHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-content-between align-items-center">
      <h2 className="text-xl font-medium mb-2">{title}</h2>
    </div>
  );
};

export default CardHeader;
