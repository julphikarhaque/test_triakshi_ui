import InputWithLabel from "@/components/fromElements/inputWithLabel";
import EmailInput from "@/components/fromElements/EmailInput";


export default function Home() {
  return (
    <div className=" h-screen w-full bg-zinc-50 font-sans dark:bg-black flex justify-center items-center ">
      {/* <InputWithLabel name={"name"} inputClassName="" />
      <InputWithLabel
        name={"email"}
        inputClassName=""
        inputProps={{
          type: "email",
        }}
      /> */}

      <EmailInput
          label="Email Address"
          helperText="We'll never share your email."

          inputProps={{
            placeholder: "Enter your email",
            required: true,
          }}
        />
    </div>
  );
}
