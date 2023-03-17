import TournamentHeaderCard from "../tournament-header-card/tournament-header-card";

export const TournamentHeaderCards = () => {
  return (
    <div className="grid">
      <TournamentHeaderCard
        title={"2,286"}
        subtitle={"New tournaments"}
        image={"/images/trophy.png"}
      >
        <span className="text-green-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-green-500 pi-angle-up"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          25.8%
        </span>
      </TournamentHeaderCard>

      <TournamentHeaderCard
        title={"231"}
        subtitle={"Total played"}
        image={"/images/trophy.png"}
      >
        <span className="text-red-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-red-500 pi-angle-down"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          5.823%
        </span>
      </TournamentHeaderCard>

      <TournamentHeaderCard
        title={"124K"}
        subtitle={"Total points"}
        icon={"pi-star"}
      >
        <span className="text-green-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-green-500 pi-angle-up"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          12.3%
        </span>
      </TournamentHeaderCard>

      <TournamentHeaderCard
        title={"4.24"}
        subtitle={"New players"}
        icon={"pi-users"}
      >
        <span className="text-red-500 text-sm absolute top-0 right-0 flex align-items-center">
          {" "}
          <i
            className="pi text-red-500 pi-angle-down"
            style={{ fontSize: "1.2rem", color: "#48ff66" }}
          ></i>
          9.23%
        </span>
      </TournamentHeaderCard>
    </div>
  );
};
