import { Tournaments } from "@/components/tournament/home/tournaments";
import { TournamentHeaderCards } from "@/components/tournament/tournament-header-cards/tournament-header-card";

const Tournament = () => {
  return (
    <>
      <div>
        <div className="surface-ground py-2">
          <TournamentHeaderCards />
        </div>

        <div>
          <Tournaments />
        </div>
      </div>
    </>
  );
};

export default Tournament;
