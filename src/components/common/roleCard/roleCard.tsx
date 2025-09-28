import type { Role } from "../../../types/roleListTypes";

export function RoleCard(
    {
        role,
        isExpanded,
        onClick,
    }
    : {
        role: Role;
        isExpanded: boolean;
        onClick: () => void;
    }
) {
  return (
    <div className="role-card">
      <div className="card-header">
        <h3 onClick={onClick}>
          {role.role}
        </h3>
      </div>

      {isExpanded && role.description 
      ? (<p>{role.description}</p>) : null}
    </div>
  );
};
