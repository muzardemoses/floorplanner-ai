import { useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", isFavorite: false, isBeingEdited: false },
    { id: 2, name: "Project 2", isFavorite: true, isBeingEdited: false },
    { id: 3, name: "Project 3", isFavorite: false, isBeingEdited: false },
  ]);

  const [newProjectName, setNewProjectName] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false); // new state variable

  const [projectToDelete, setProjectToDelete] = useState(null); // new state variable

  const handleFavoriteClick = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? { ...project, isFavorite: !project.isFavorite }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleRenameClick = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, isBeingEdited: true } : project
    );
    setProjects(updatedProjects);
  };

  const handleRenameCancel = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, isBeingEdited: false } : project
    );
    setProjects(updatedProjects);
  };

  const handleRenameSubmit = (id, newName) => {
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? { ...project, name: newName, isBeingEdited: false }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleDeleteClick = (id) => {
    setProjectToDelete(id); // set the project to be deleted
    setShowDeletePrompt(true); // show the delete confirmation prompt
  };

  const handleDeleteConfirm = () => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectToDelete
    );
    setProjects(updatedProjects);
    setShowDeletePrompt(false); // hide the delete confirmation prompt
  };

  const handleDeleteCancel = () => {
    setProjectToDelete(null); // reset the project to be deleted
    setShowDeletePrompt(false); // hide the delete confirmation prompt
  };

  const handleCreateFormOpen = () => {
    setShowCreateForm(true);
  };

  const handleCreateFormCancel = () => {
    setShowCreateForm(false);
  };

  const handleCreateFormSubmit = () => {
    const newProject = {
      id: projects.length + 1,
      name: newProjectName,
      isFavorite: false,
      isBeingEdited: false,
    };
    setProjects([...projects, newProject]);
    setNewProjectName("");
    setShowCreateForm(false);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold my-6">Projects</h1>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded my-4"
        onClick={handleCreateFormOpen}
      >
        Create New Project
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border-t border-gray-200 pt-4">
            {project.isBeingEdited ? (
              <div>
                <input
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="border rounded w-full py-2 px-3 mb-3"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleRenameSubmit(project.id, newProjectName)}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRenameCancel(project.id)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{project.name}</h2>
                  <div className="flex gap-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleRenameClick(project.id)}
                    >
                      Rename
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeleteClick(project.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleFavoriteClick(project.id)}
                  >
                    {project.isFavorite ? "Unfavorite" : "Favorite"}
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {showDeletePrompt && (
        <div className="border-t border-gray-200 pt-4">
          <p className="mb-4">Are you sure you want to delete this project?</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleDeleteConfirm}
          >
            Yes
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeleteCancel}
          >
            No
          </button>
        </div>
      )}
      {showCreateForm && (
        <div className="border-t border-gray-200 pt-4">
          <input
            type="text"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            className="border rounded w-full py-2 px-3 mb-3"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleCreateFormSubmit}
          >
            Create
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleCreateFormCancel}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};
