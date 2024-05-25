import { FC } from "react";

import Contact from "./contact";
import { users } from "@/utils/dummyData";

const Contacts: FC = () => {
  return (
    <div className="space-y-[28px]">
      {users.map((user, index) => (
        <Contact user={user} key={index} />
      ))}
    </div>
  );
};

export default Contacts;
