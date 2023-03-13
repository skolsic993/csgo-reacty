import { FaceitAccount } from "@/models/FaceitAccount";
import Link from "next/link";

const Friends = ({ friends }: { friends: FaceitAccount[] }) => {
  return (
    <div className="surface-card shadow-2 p-3 border-round mb-3">
      <div className="flex justify-content-between align-items-center">
        <h2 className="text-xl font-medium mb-2">Friends</h2>

        <Link href="/tournaments">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-reply text-xl"></i>
          </button>
        </Link>
      </div>

      <div className="flex flex-column">
        {friends?.map((friend: FaceitAccount) => (
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
