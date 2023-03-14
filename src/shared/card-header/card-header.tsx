import Link from "next/link";

const CardHeader = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="flex justify-content-between align-items-center">
      <h2 className="text-xl font-medium mb-2">{title}</h2>

      <Link href={link}>
        <button type="button" className="p-link layout-topbar-button">
          <i className="pi pi-reply text-xl"></i>
        </button>
      </Link>
    </div>
  );
};

export default CardHeader;
