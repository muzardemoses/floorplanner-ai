import { useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project 1",
      description: "This is project 1",
      isFavorite: false,
      isBeingEdited: false,
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is project 2",
      isFavorite: true,
      isBeingEdited: false,
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is project 3",
      isFavorite: false,
      isBeingEdited: false,
    },
  ]);

  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleFavoriteClick = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? { ...project, isFavorite: !project.isFavorite }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleEditClick = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, isBeingEdited: true } : project
    );
    setProjects(updatedProjects);
  };

  const handleEditCancel = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, isBeingEdited: false } : project
    );
    setProjects(updatedProjects);
  };

  const handleEditSubmit = (id, newName, newDescription) => {
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? {
            ...project,
            name: newName,
            description: newDescription,
            isBeingEdited: false,
          }
        : project
    );
    setProjects(updatedProjects);
  };

  const handleDeleteClick = (id) => {
    setProjectToDelete(id);
    setShowDeletePrompt(true);
  };

  const handleDeleteConfirm = () => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectToDelete
    );
    setProjects(updatedProjects);
    setShowDeletePrompt(false);
  };

  const handleDeleteCancel = () => {
    setProjectToDelete(null);
    setShowDeletePrompt(false);
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
      description: newProjectDescription,
      isFavorite: false,
      isBeingEdited: false,
    };
    setProjects([...projects, newProject]);
    setNewProjectName("");
    setNewProjectDescription("");
    setShowCreateForm(false);
  };

  return (
    <div className="" style={{ width: "500px",
    }}>
      <h1 className="text-3xl font-bold my-6">Projects</h1>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded my-4"
        onClick={handleCreateFormOpen}
      >
        Create New Project
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded my-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="text-2xl mr-4"
                  onClick={() => handleFavoriteClick(project.id)}
                >
                  {project.isFavorite ? "★" : "☆"}
                </button>
                <div>
                  <h2 className="text-xl font-bold">{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEditClick(project.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDeleteClick(project.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            {project.isBeingEdited && (
              <div className="mt-4">
                <div className=" flex flex-col gap-4">
                  <input
                    className="border rounded px-2 py-1 mr-2 focus:ring-gray-100 focus:border-gray-300 focus:outline-none"
                    type="text"
                    placeholder="New project name"
                    //   value={project.name}
                    onChange={(e) => setNewProjectName(e.target.value)}
                  />
                  <textarea
                    className="border rounded px-2 py-1 mr-2 focus:ring-gray-100 focus:border-gray-300 focus:outline-none h-24"
                    placeholder="New project description"
                    //value={project.description}
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                  />
                </div>
                <div className="flex gap-6 mt-6">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded "
                    onClick={() =>
                      handleEditSubmit(
                        project.id,
                        newProjectName,
                        newProjectDescription
                      )
                    }
                  >
                    Submit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleEditCancel(project.id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {showCreateForm && (
        <div className="border p-4 rounded my-4">
          <h2 className="text-xl font-bold mb-4">Create New Project</h2>
          <div className="flex flex-col gap-4">
            <input
              className="border rounded px-2 py-1 focus:ring-gray-100 focus:border-gray-300 focus:outline-none"
              type="text"
              placeholder="New project name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
            <textarea
              className="border rounded px-2 py-1 mr-2 focus:ring-gray-100 focus:border-gray-300 focus:outline-none h-24"
              type="text"
              placeholder="New project description"
              value={newProjectDescription}
              onChange={(e) => setNewProjectDescription(e.target.value)}
            />
            <div className="flex gap-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleCreateFormSubmit}
              >
                Submit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleCreateFormCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showDeletePrompt && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <p>Are you sure you want to delete this project?</p>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
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
          </div>
        </div>
      )}
    </div>
  );
};
