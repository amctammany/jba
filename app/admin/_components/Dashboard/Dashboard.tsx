import { ButtonLink } from "@/components/Button/ButtonLink";
//import { DialogButton } from "@/components/Dialog";
import Prop from "@/components/Prop/Prop";
import { Section } from "@/components/Section";
//import { Section } from "@/components/Section/Section";
import { User } from "@prisma/client";

export type DashboardProps = {
  src?: User | null;
  //action?: any;
  //children: React.ReactNode;
};

const AdminSettingsActions = () => {
  return (
    <div className="grid grid-flow-col">
      <ButtonLink href="/admin/profile">Profile</ButtonLink>
      <ButtonLink href="/api/auth/signout">Signout</ButtonLink>
    </div>
  );
};

export const Dashboard = ({ src }: DashboardProps) => {
  return (
    <div className="mx-auto w-10/12 grid grid-flow-row gap-8">
      <Section header="Admin" actions={<AdminSettingsActions />}>
        <div>
          <Prop label="Name" value={src?.name} />
          <Prop label="Email" value={src?.email} />
        </div>
      </Section>
      <Section header="Progress">Progerss</Section>
    </div>
  );
};
export default Dashboard;
