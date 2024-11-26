"use client";
import { ButtonLink } from "@/components/Button/ButtonLink";
import { Form, Submit, TextField } from "@/components/Form";
import { Input } from "@/components/Form/Input";
//import { DialogButton } from "@/components/Dialog";
//import Prop from "@/components/Prop/Prop";
import { Section } from "@/components/Section";
//import { Section } from "@/components/Section/Section";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";

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
  const { register } = useForm({ defaultValues: src || {} });
  return (
    <div className="mx-auto w-10/12 grid grid-flow-row gap-8">
      <Section header="Profile" actions={<ProfileActions />}>
        <div>
          <Form action={action}>
            <Input type="hidden" {...register("id")} />
            <TextField label="Name" {...register("name")} />
            <TextField label="Email" {...register("email")} />
            <Submit>Save</Submit>
          </Form>
        </div>
      </Section>
    </div>
  );
};
export default Profile;
