"use client";
import {
  Form,
  NumberField,
  Submit,
  TextField,
  TextArea,
} from "@/components/Form";
import { Input } from "@/components/Form/Input";
//import { DialogButton } from "@/components/Dialog";
import { Section } from "@/components/Section";
//import { Section } from "@/components/Section/Section";
import { Brewery } from "@prisma/client";
import { useActionState } from "react";
import { useForm } from "react-hook-form";

export type BreweryEditorProps = {
  src?: Brewery | null;
  action?: any;
  //children: React.ReactNode;
};

const BreweryEditorActions = () => {
  return (
    <div className="grid grid-flow-col">
      <Submit>Save</Submit>
    </div>
  );
};

export const BreweryEditor = ({ src, action }: BreweryEditorProps) => {
  const { register } = useForm({ defaultValues: src || { id: undefined } });
  const [state, formAction] = useActionState<any, FormData>(action, null);
  console.log(state);
  return (
    <div className="mx-auto w-10/12 grid grid-flow-row gap-8">
      <Form action={formAction}>
        <Section header="BreweryEditor" actions={<BreweryEditorActions />}>
          <div>
            <Input type="hidden" {...register("id")} />
            <TextField label="Name" {...register("name")} />
            <TextArea label="Description" {...register("description")} />
            <TextField label="Phone Number" {...register("phoneNumber")} />
            <TextField label="Website URL" {...register("website")} />
            <TextField label="Address" {...register("address")} />

            <NumberField label="Longitude" {...register("lng")} />
            <NumberField label="Latitude" {...register("lat")} />
            <Submit>Save</Submit>
          </div>
        </Section>
      </Form>
    </div>
  );
};
export default BreweryEditor;
