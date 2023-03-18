import HeaderCard from "@/shared/header-card/header-card";

const ChampionshiptHeaderCards = () => {
  return (
    <div className="grid">
      <HeaderCard
        title={"456"}
        subtitle={"Championships"}
        image={"/images/trophy.png"}
        background={"bg-indigo-500"}
      >
        <span className="text-red-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-red-500 pi-angle-down"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          5.8%
        </span>
      </HeaderCard>

      <HeaderCard
        title={"74"}
        subtitle={"Total played"}
        image={"/images/trophy.png"}
        background={"bg-indigo-500"}
      >
        <span className="text-red-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-red-500 pi-angle-down"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          5.823%
        </span>
      </HeaderCard>

      <HeaderCard
        title={"65K"}
        subtitle={"Total points"}
        icon={"pi-star"}
        background={"bg-yellow-500"}
      >
        <span className="text-green-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-green-500 pi-angle-up"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          12.3%
        </span>
      </HeaderCard>

      <HeaderCard
        title={"4.24"}
        subtitle={"New players"}
        icon={"pi-users"}
        background={"bg-red-500"}
      >
        <span className="text-red-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-red-500 pi-angle-down"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          9.23%
        </span>
      </HeaderCard>
    </div>
  );
};

export default ChampionshiptHeaderCards;
