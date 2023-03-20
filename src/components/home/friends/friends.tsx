import useFetch from "@/hooks/useFetch";
import { FaceitAccount } from "@/models/FaceitAccount";
import CardHeader from "@/shared/card-header/card-header";

const Friends = ({ friends }: { friends: string }) => {
  const { data }: { data: FaceitAccount[] } = useFetch(`/friends/${friends}`);

  return (
    <div className="surface-card shadow-2 p-3 border-round mb-3 transition-duration-400 hover:shadow-4">
      <CardHeader title="Friends" />

      <div className="flex flex-column">
        {typeof data !== "string" &&
          data &&
          data?.map((friend: FaceitAccount) => (
            <div className="flex mt-4" key={friend?.player_id}>
              <div className="flex align-items-center justify-content-center  border-round">
                <img
                  className=" border-circle"
                  style={{ width: "35px", height: "35px", objectFit: "cover" }}
                  src={`${
                    friend?.avatar ? friend?.avatar : "/images/user-icon.png"
                  }`}
                  alt="Friend"
                />
              </div>

              <div className="flex justify-content-between ml-3 flex-wrap w-full">
                <div className="flex flex-column justify-content-between">
                  <span className="text-lg">{friend?.steam_nickname}</span>
                  <span className="text-sm text-500">{friend?.nickname}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Friends;
