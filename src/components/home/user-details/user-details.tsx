import { FaceitAccount } from "@/models/FaceitAccount";

const UserDetails = ({ faceitUser }: { faceitUser: FaceitAccount }) => {
  return (
    <>
      <div className="surface-card shadow-1 p-3 border-round mb-2 transition-duration-400 hover:shadow-4">
        <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between ">
          <div className="w-full flex align-items-center sm:align-items-start flex-column sm:flex-row">
            <img
              src={faceitUser?.avatar}
              className="mr-0 sm:mr-5 mb-3 lg:mb-0 border-circle shadow-4 w-8rem"
            />
            <div>
              <div className="flex justify-content-center sm:justify-content-start align-items-center">
                <span className="text-900 font-medium text-3xl">
                  {faceitUser?.nickname}
                </span>

                <i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>
              </div>
              <div className="flex align-items-center flex-wrap text-sm">
                <div className="mr-5 mt-3">
                  <span className="font-medium text-500 uppercase">
                    nickname
                  </span>
                  <div className="text-700 mt-2 text-lg">
                    {faceitUser?.steam_nickname}
                  </div>
                </div>
                <div className="mr-5 mt-3">
                  <span className="font-medium text-500 uppercase">
                    country
                  </span>
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
      </div>
    </>
  );
};

export default UserDetails;
