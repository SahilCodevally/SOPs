import { FC } from "react";

import Button from "@/components/core/button";
import PlusIcon from "@/icons/PlusIcon";

const Header: FC = () => {
  return (
    <div className="flex items-center justify-between gap-[20px]">
      <div className="space-y-[4px]">
        <h3 className="text-[17px] font-[500] leading-[23px] tracking-[-1%]">
          My Contacts
        </h3>
        <span className="text-dark-grey text-[14px] leading-[20px] tracking-[-1%]">
          230 Contacts are available
        </span>
      </div>
      <Button>
        <div className="flex items-center gap-[8px]">
          <PlusIcon />
          <span>Import</span>
        </div>
      </Button>
    </div>
  );
};

export default Header;
