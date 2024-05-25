import { FC } from "react";

import Card from "@/components/core/card";
import ContactsList from "@/components/pages/contacts";
import Header from "@/components/pages/contacts/header";

const Contacts: FC = () => {
  return (
    <div className="mx-auto my-[20px] flex w-full justify-center">
      <Card>
        {/* Header */}
        <Header />

        {/* Line */}
        <div className="bg-medium-grey mb-[24px] mt-[20px] h-[1px] w-full"></div>

        {/* Contacts List */}
        <ContactsList />
      </Card>
    </div>
  );
};

export default Contacts;
