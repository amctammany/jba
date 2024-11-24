"use client";
import { ButtonLink } from "@/components/Button/ButtonLink";
import { Form, NumberField, Submit, TextField } from "@/components/Form";
import { Input } from "@/components/Form/Input";
//import { DialogButton } from "@/components/Dialog";
import Prop from "@/components/Prop/Prop";
import { Section } from "@/components/Section";
//import { Section } from "@/components/Section/Section";
import { Brewery, User } from "@prisma/client";
import { useActionState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";

export type BreweryEditorProps = {
  src?: Brewery | null;
  action?: any;
  //children: React.ReactNode;
};

const BreweryEditorActions = () => {
  return (
    <div className="grid grid-flow-col">
      <ButtonLink href="/admin/breweryEditor">Save</ButtonLink>
      <ButtonLink href="/api/auth/signout">Signout</ButtonLink>
    </div>
  );
};

export const BreweryEditor = ({ src, action }: BreweryEditorProps) => {
  const { register } = useForm({ defaultValues: src || { id: undefined } });
  const [state, formAction] = useActionState<any, FormData>(action, null);
  console.log(state);
  return (
    <div className="mx-auto w-10/12 grid grid-flow-row gap-8">
      <Section header="BreweryEditor" actions={<BreweryEditorActions />}>
        <div>
          <Form action={formAction}>
            <Input type="hidden" {...register("id")} />
            <TextField label="Name" {...register("name")} />
            <TextField label="Address" {...register("address")} />

            <NumberField label="Longitude" {...register("lng")} />
            <NumberField label="Latitude" {...register("lat")} />
            <Submit>Save</Submit>
          </Form>
        </div>
      </Section>
    </div>
  );
};
export default BreweryEditor;
