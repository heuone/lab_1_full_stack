
import { RoleList } from "../../common/roleList/roleList";
import rolesData from "../../directory/leadManageList.json"; 
import { useEntryForm } from "../../../hooks/useEntryForm";


export function Organization() {
  const objectValues = {role: "",description: ""};
  const { formData, handleInputChange, handleSubmit } = useEntryForm(objectValues);
  return (
    <main>
      <h2>Organization</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="role"
          placeholder="Organization role"
          value={formData.role}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <button type="submit">Add Role</button>
      </form>
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
};