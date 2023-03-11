import { FaceitAccount } from "@/models/FaceitAccount";

const UserDetails = ({ faceitUser }: { faceitUser: FaceitAccount }) => {
  return (
    <>
      <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
        <div className="flex align-items-start sm:flex-row">
          <img
            src={faceitUser?.avatar}
            className="mr-5 mb-3 lg:mb-0 border-circle shadow-4 w-2 h-2 "
          />
          <div>
            <div>
              <span className="text-900 font-medium text-3xl">
                {faceitUser?.nickname}
              </span>

              <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
            </div>
            <div className="flex align-items-center flex-wrap text-sm">
              <div className="mr-5 mt-3">
                <span className="font-medium text-500 uppercase">nickname</span>
                <div className="text-700 mt-2 text-lg">
                  {faceitUser?.steam_nickname}
                </div>
              </div>
              <div className="mr-5 mt-3">
                <span className="font-medium text-500 uppercase">country</span>
                <div className="text-700 mt-2 text-lg uppercase">
                  {faceitUser?.country}
                </div>
              </div>
              <div className="mr-5 mt-3">
                <span className="font-medium text-500 uppercase">region</span>
                <div className="text-700 mt-2 text-lg">
                  {faceitUser?.games?.csgo?.region}
                </div>
              </div>
              <div className="mr-5 mt-3">
                <span className="font-medium text-500 uppercase">level</span>
                <div className="text-700 mt-2 text-lg">
                  {faceitUser?.games?.csgo?.skill_level}
                </div>
              </div>
              <div className="mr-5 mt-3">
                <span className="font-medium text-500 uppercase">elo</span>
                <div className="text-700 mt-2 text-lg">
                  {faceitUser?.games?.csgo?.faceit_elo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
