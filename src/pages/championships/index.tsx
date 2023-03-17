import ChampionshipHeaderCards from "@/components/championship/championship-header-cards/championship-header-cards";
import { ChampionshipList } from "@/components/championship/home/championship";

const Championships = () => {
  return (
    <div>
      <div className="surface-ground mb-2">
        <ChampionshipHeaderCards />
      </div>

      <div>
        <ChampionshipList />
      </div>
    </div>
  );
};

export default Championships;
