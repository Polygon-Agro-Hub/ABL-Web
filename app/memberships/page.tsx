import Memberships from "@/components/memberships/Memberships";
import WhoCanJoin from "@/components/memberships/WhoCanJoin";

export default function MembershipsPage() {
  return (
    <div className="flex flex-col my-18 mx-auto gap-20">
      <div className="flex flex-col px-6 gap-20">
        <Memberships />
      </div>
      <WhoCanJoin />
    </div>
  );
}
