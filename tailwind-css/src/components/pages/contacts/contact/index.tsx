import { FC } from "react";

import { IconColor } from "@/enum";
import { User } from "@/types/User";
import PlusIcon from "@/icons/PlusIcon";
import Button, { ButtonVariants } from "@/components/core/button";

type ContactProps = {
  user: User;
};

const Contact: FC<ContactProps> = ({ user }) => {
  return (
    <div className="flex items-center justify-between gap-[20px]">
      <div className="flex flex-row items-center gap-[12px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user.image}
          alt={user.username}
          className="h-[40px] w-[40px] rounded-full"
        />
        <div className="space-y-[4px]">
          <h3 className="text-[15px] font-[500] leading-[21px] tracking-[-1%]">
            {user.username}
          </h3>
          <span className="text-dark-grey flex flex-row text-[14px] leading-[20px] tracking-[-1%]">
            {user.role}
            <ul className="ml-[25px] list-disc">
              <li>{user.location}</li>
            </ul>
          </span>
        </div>
      </div>
      <Button variant={ButtonVariants.LightBlue}>
        <div className="flex items-center gap-[8px]">
          <PlusIcon
            color={IconColor.BluePurple}
            secondaryColor={IconColor.LightBlue}
          />
          <span className="text-[14px] font-[500] leading-[20px] tracking-[-1%]">
            Invite
          </span>
        </div>
      </Button>
    </div>
  );
};

export default Contact;
