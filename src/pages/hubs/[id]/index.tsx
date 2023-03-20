import { HubDetailInfo } from "@/components/hub/hub-detail-info/hub-detail-info";
import HubMembers from "@/components/hub/hub-members/hub-members";
import HubRoles from "@/components/hub/hub-roles/hub-roles";
import useFetch from "@/hooks/useFetch";
import { HubDetail } from "@/models/HubDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HubDetails = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const { id } = router?.query;

  const { data: hub }: { data: HubDetail } = useFetch(url);

  useEffect(() => {
    if (id) {
      setUrl(`/hubs/${id}/details`);
    }
  }, [id]);

  return (
    <>
      <div className="grid">
        <HubDetailInfo hub={hub} />
        <HubMembers hub={hub} />
        <HubRoles hub={hub} />
      </div>
    </>
  );
};

export default HubDetails;
