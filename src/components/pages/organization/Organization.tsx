
import { RoleList } from "../../common/roleList/roleList";
import rolesData from "../../directory/leadManageList.json"; 

export function Organization() {
  return (
    <main>
      <h2>Organization</h2>

      <h3>Executives</h3>
      <RoleList roles={rolesData.executives} />

      <h3>Directors</h3>
      <RoleList roles={rolesData.directors} />

      <h3>Managers</h3>
      <RoleList roles={rolesData.managers} />

      <h3>Specialists</h3>
      <RoleList roles={rolesData.specialists} />
    </main>
  );
}