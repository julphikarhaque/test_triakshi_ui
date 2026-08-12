//"use client";

import InputWithLabel from "@/components/formElements/inputWithLabel";
import PasswordInput from "@/components/formElements/PasswordInput";
import PhoneInput from "@/components/formElements/PhoneInput";
import SelectInput from "@/components/formElements/SelectInput";
import Checkbox from "@/components/formElements/Checkbox";
import Input from "@/components/formElements/input";
import { User, MailOpen } from "lucide-react";
import Radio from "@/components/formElements/Radio";
import Switch from "@/components/formElements/Switch";
import Textarea from "@/components/formElements/Textarea";
import FileUpload from "@/components/formElements/FileUpload";
import Button from "@/components/formElements/Button";
import { ArrowRight, Plus } from "lucide-react";
import Avatar from "@/components/Avatar";
import Badge from "@/components/formElements/Badge";
//import Skeleton from "@/components/Skeleton";
//import SkeletonCard from "@/components/SkeletonCard";
//import MultiSelect from "@/components/formElements/MultiSelect";



//import { useState } from "react";

const skills = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Next.js",
    value: "nextjs",
  },
  {
    label: "Node.js",
    value: "nodejs",
  },
  {
    label: "MongoDB",
    value: "mongodb",
  },
  {
    label: "Python",
    value: "python",
  },
];

export default function Home() {
  //const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <div className="h-screen bg-black font-sans flex flex-col justify-center items-center px-50 ">
      {/* <InputWithLabel name={"name"} inputClassName="" />
      <InputWithLabel
        name={"email"}
        inputClassName=""
        inputProps={{
          type: "email",
        }}
      /> */}
    <PhoneInput
  inputProps={{
    placeholder: "Enter your phone number",
  }}
/>
      {/*<br/><br/><br/>
      <PasswordInput inputProps={{placeholder:"Password"}}/>
      <br/><br/><br/>
        <br/><br/><br/>
        <SelectInput options={[
    {
      label: "Choose Country",
      value: "",
    },
    {
      label: "India",
      value: "india",
    },
    {
      label: "USA",
      value: "usa",
    }]}/>
    <br/><br/><br/>
    
  <br/><br/><br/>
  <Checkbox label="Accept terms" helperText="I agree to the terms and conditions." inputProps={{
    defaultChecked: true,
  }}/> */}
  <br/>
  {/* <Input type="text"
    label="Username"
    leftIcon={<User size={20} />}
    inputProps={{
      name: "username",
      placeholder:"Enter username",
    }}/> */}
    {/* <Input
          type="email"
          label="Email"
          leftIcon={<MailOpen size={20}/>}
          inputProps={{
            id:"user-email",
            name:"email",
            placeholder: "Enter your Email",
            required:true,
            autoComplete:"email",
          }}
        />
        <Input
  type="text"
  label="Name"
  inputProps={{
    name: "name",
    placeholder: "Enter your name",
  }}
/>
  <br/>
  <Radio
  label="React"
  inputProps={{
    name: "technology",
    value: "react",
  }}
/>

<Radio
  label="Next.js"
  inputProps={{
    name: "technology",
    value: "next",
  }}
/>

<Radio
  label="Vue"
  inputProps={{
    name: "technology",
    value: "vue",
  }}
/>
  <br/>
  <Switch
  label="Notifications"
  helperText="Receive important updates by email."
/>
<br/>
<Textarea
  label="Feedback"
  textareaClassName="min-h-40 rounded-2xl bg-black-50"
  textareaProps={{placeholder:"Write a message for us!"}}
/><br/>
  <FileUpload
  label="Documents"
  inputProps={{
    multiple: true,
    accept: ".pdf,.doc,.docx",
  }}
/>
<FileUpload
  label="Upload Resume"
  uploadClassName="min-h-40 rounded-2x1 bg-red-100"
/> */}



<br />
{/* <MultiSelect
            label="Skills"
            options={skills}
            value={selectedSkills}
            onChange={setSelectedSkills}
            placeholder="Select your skills..."
          /> */}

<br/>
 <Button variant="destructive"
  leftIcon={<Plus size={18} />} 
  rightIcon={<ArrowRight size={18}/>}
>
  Add Customer
</Button>
<Button variant="destructive"
  buttonProps={{
    disabled: true,
  }}
>
  Disabled
</Button>
<br/>
<Avatar
  src="/man.png"
  fallback="JD"
  size="xl"
  
/>
<br />
<Badge size="lg" variant="info">
  New
</Badge>
<Badge

  variant="info"
  badgeClassName="
    rounded-lg
    px-4
  "
>
  AI Agent
</Badge>
<br />

<br />

    </div>
  );
}
