import { useState } from "react";
import type { Role } from "../../../types/roleListTypes";
import { RoleCard } from "../roleCard/roleCard";

export function RoleList({ roles }: { roles: Role[] 

}) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const roleItems = roles.map((role, index) => {
    return (
      <RoleCard
        key={index}       
        role={role}
        isExpanded={expandedId === index}   
        onClick={
          () => {
          setExpandedId(expandedId === index ? null : index);
        }}
      />
    );
  });
  return <div className="role-list">{roleItems}</div>;
};
