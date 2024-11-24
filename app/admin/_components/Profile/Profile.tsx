import { ButtonLink } from "@/components/Button/ButtonLink";
//import { DialogButton } from "@/components/Dialog";
import Prop from "@/components/Prop/Prop";
import { Section } from "@/components/Section";
//import { Section } from "@/components/Section/Section";
import { User } from "@prisma/client";

export type ProfileProps = {
  src?: User | null;
  action?: any;
  //children: React.ReactNode;
};

const ProfileActions = () => {
  return (
    <div className="grid grid-flow-col">
      <ButtonLink href="/admin/profile">Save</ButtonLink>
      <ButtonLink href="/api/auth/signout">Signout</ButtonLink>
    </div>
  );
};

export const Profile = ({ src, action }: ProfileProps) => {
  return (
    <div className="mx-auto w-10/12 grid grid-flow-row gap-8">
      <Section header="Profile" actions={<ProfileActions />}>
        <div>
          <input type="text" name="name" />
          <input type="text" name="email" />
        </div>
      </Section>
    </div>
  );
};
export default Profile;
