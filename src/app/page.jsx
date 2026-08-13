//"use client";
import { Trash2 } from "lucide-react";
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
import Skeleton from "@/components/Skeleton";
import SkeletonCard from "@/components/SkeletonCard";
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
    <div className="min-h-screen bg-black font-sans flex flex-col justify-center items-center px-4 md:px-12 py-10">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <br />
        
        {/* Select & Checkbox */}
        <SelectInput
          options={[
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
            },
          ]}
        />
        <br />
        <Checkbox
          label="Accept terms"
          helperText="I agree to the terms and conditions."
          inputProps={{
            defaultChecked: true,
          }}
        />
        <br />

        {/* Input Fields */}
        <Input
          type="text"
          label="Username"
          leftIcon={<User size={20} />}
          inputProps={{
            name: "username",
            placeholder: "Enter username",
          }}
        />
        <br />
        <Input
          type="email"
          label="Email"
          helperText="we will never share your email"
          inputClassName=""
          inputProps={{
            name: "email",
            placeholder: "Enter your email",
            required: true,
            autoComplete: "email",
          }}
        />
        <br />
        <Input
          type="search"
          label="Search"
          inputProps={{
            placeholder: "Search...",
          }}
        />
        <br />
        <Input
          type="email"
          label="Work Email"
          helperText="Use your company email address."
          inputProps={{
            placeholder: "you@company.com",
          }}
        />
        <br />
        <Input
          type="number"
          label="Age"
          inputProps={{
            placeholder: "Enter your age",
          }}
        />
        <br />
        <Input
          type="email"
          label="Email"
          leftIcon={<MailOpen size={20} />}
          inputProps={{
            id: "user-email",
            name: "email",
            placeholder: "Enter your Email",
            required: true,
            autoComplete: "email",
          }}
        />
        <br />
        <Input
          type="email"
          label="Email"
          error="Please enter a valid email address."
          inputProps={{
            placeholder: "Enter email",
          }}
        />
        <br />
        <Input
          type="text"
          label="Name"
          inputProps={{
            name: "name",
            placeholder: "Enter your name",
          }}
        />
        <br />

        {/* Phone & Radio */}
        <PhoneInput
          inputProps={{
            placeholder: "Enter your phone number",
          }}
        />
        <br />
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
        <br />

        {/* Switch, Textarea & File Upload */}
        <Switch
          label="Notifications"
          helperText="Receive important updates by email."
        />
        <br />
        <Textarea
          label="Feedback"
          textareaClassName="min-h-40 rounded-2xl bg-black-50"
          textareaProps={{ placeholder: "Write a message for us!" }}
        />
        <br />
        <FileUpload
          label="Documents"
          inputProps={{
            multiple: true,
            accept: ".pdf,.doc,.docx",
          }}
        />
        <FileUpload
          label="Upload Resume"
          uploadClassName="min-h-40 rounded-2xl bg-red-100"
        />
        <br />

        {/* <MultiSelect
          label="Skills"
          options={skills}
          value={selectedSkills}
          onChange={setSelectedSkills}
          placeholder="Select your skills..."
        /> */}

        <br />

        {/* Action Buttons */}
        <Button
          variant="destructive"
          leftIcon={<Plus size={18} />}
          rightIcon={<ArrowRight size={18} />}
        >
          Add Customer
        </Button>
        <Button
          variant="destructive"
          buttonProps={{
            disabled: true,
          }}
        >
          Disabled
        </Button>
        <br />
        <Button variant="destructive" leftIcon={<Trash2 size={16} />}>
          Delete
        </Button>
        <br />

        {/* Avatar & Badges */}
        <Avatar src="/man.png" fallback="JD" size="xl" />
        <br />
        <Button
          variant="primary"
          buttonClassName="rounded-full px-8"
        >
          Get Started
        </Button>
        <br />
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <br />
        <Badge size="lg" variant="error">
          New
        </Badge>
        <Badge
          variant="info"
          badgeClassName="rounded-lg px-4"
        >
          AI Agent
        </Badge>
        <br />

        {/* Password Field */}
        <PasswordInput inputProps={{ placeholder: "Password" }} />
        <br />
        <SkeletonCard />
        <br />
      </div>
    </div>
  );
}