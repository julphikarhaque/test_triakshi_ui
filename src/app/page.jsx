import Image from "next/image";
import InputWithLabel from "@/components/fromElements/inputWithLabel";

export default function Home() {
  return (
    <div className=" h-screen w-full bg-zinc-50 font-sans dark:bg-black flex justify-center items-center ">
      <InputWithLabel name={"name"} inputClassName="" />
      <InputWithLabel
        name={"email"}
        inputClassName=""
        inputProps={{
          type: "email",
        }}
      />
    </div>
  );
}
