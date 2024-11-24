import { ButtonLink } from "@/components/Button/ButtonLink";
//import { DialogButton } from "@/components/Dialog";
import Prop from "@/components/Prop/Prop";
import { Section } from "@/components/Section";
//import { Section } from "@/components/Section/Section";
import { User } from "@prisma/client";

export type DashboardProps = {
  src?: User | null;
  action?: any;
  //children: React.ReactNode;
};

const AdminSettingsActions = () => {
  return (
    <div className="grid grid-flow-col">
      <ButtonLink href="/api/auth/signout">Signout</ButtonLink>
    </div>
  );
};

export const Dashboard = ({ src, action }: DashboardProps) => {
  return (
    <div className="mx-auto w-10/12">
      <Section header="Admin" actions={<AdminSettingsActions />}>
        <div>
          <Prop label="Name" value={src?.name} />
          <Prop label="Email" value={src?.email} />
        </div>
      </Section>
    </div>
  );
};
export default Dashboard;
