import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drop-shadow-card w-full max-w-[720px] rounded-[10px] border-[0.6px] border-black/[0.18] p-[20px]">
      {children}
    </div>
  );
};

export default Card;
