import Link from "next/link";
import React from "react";

const SidebarNavItem = (props) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <span>{props.icon}</span>
      <div>
        <Link href={props.link ? props.link : "/"}>{props.name}</Link>
      </div>
    </div>
  );
};

export default SidebarNavItem;
