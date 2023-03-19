import { Tournaments } from "@/components/tournament/home/tournaments";
import { TournamentHeaderCards } from "@/components/tournament/tournament-header-cards/tournament-header-card";

const Tournament = () => {
  return (
    <>
      <div className="surface-ground mb-2">
        <TournamentHeaderCards />
      </div>

      <div>
        <Tournaments />
      </div>
    </>
  );
};

export default Tournament;
