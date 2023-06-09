const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project 1",
      description: "Description for Project 1",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description for Project 2",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description for Project 3",
      isFavorite: true,
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description for Project 4",
      isFavorite: false,
    },
  ]);


  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [showFloorplanWizard, setShowFloorplanWizard] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");

  const [showPurchaseScreen, setShowPurchaseScreen] = useState(false);
  const [purchasedProject, setPurchasedProject] = useState(null);

  const [showCreditsPrompt, setShowCreditsPrompt] = useState(false);
  const [creditsToPurchase, setCreditsToPurchase] = useState(0);

  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [purchaseFormData, setPurchaseFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "",
  });


  
  const handleFavoriteClick = (id) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, isFavorite: !project.isFavorite };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  const handleRenameClick = (id) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        return { ...project, isBeingEdited: true };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  const handleDeleteClick = (id) => {
    setShowConfirmDelete(true);
    setSelectedProject(id);
  };

  const handleDeleteConfirm = () => {
    const updatedProjects = projects.filter(
      (project) => project.id !== selectedProject
    );
    setProjects(updatedProjects);
    setShowConfirmDelete(false);
    setSelectedProject(null);
  };

  const handleDeleteCancel = () => {
    setShowConfirmDelete(false);
    setSelectedProject(null);
  };

  const handleNewProjectClick = () => {
    setShowFloorplanWizard(true);
    setNewProjectName("");
    setNewProjectDescription("");
  };

  const handleNewProjectCancel = () => {
    setShowFloorplanWizard(false);
  };

  const handleNewProjectSubmit = () => {
    // Submit new project to server
    setShowFloorplanWizard(false);
  };


  const handleProjectClick = (id) => {
    // Check if project is already purchased
    // If yes, set purchasedProject state
    // If not, show purchase screen
  };

  const handleCreditsClick = () => {
    setShowCreditsPrompt(true);
    setCreditsToPurchase(0);
  };

  const handleCreditsCancel = () => {
    setShowCreditsPrompt(false);
    setCreditsToPurchase(0);
  };

  const handleCreditsSubmit = () => {
    // Submit credits purchase to server
    setShowPurchaseForm(true);
    setShowCreditsPrompt(false);
    setCreditsToPurchase(0);
  };
  const handlePurchaseFormSubmit = () => {
    // Submit purchase form to server
    setShowPurchaseForm(false);
    // Update credits state
  };


  
  <div className="flex justify-between mb-4">
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleNewProjectClick}
  >
    New Project
  </button>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleCreditsClick}
  >
    Credits
  </button>
</div>

<ul>
{projects.map((project) => (
  <li key={project.id} className="mb-2">
    {project.isBeingEdited ? (
      <input
        type="text"
        value={project.name}
        className="border border-gray-400 rounded py-2 px-4 mb-2"
      />
    ) : (
      <>
        <div className="flex items-center justify-between">
          <span>{project.name}</span>
          <div>
            <button
              className={`${
                project.isFavorite ? "text-yellow-500" : "text-gray-500"
              } ml-4`}
              onClick={() => handleFavoriteClick(project.id)}
            >
              {project.isFavorite
                ? "Remove from favorites"
                : "Add to favorites"}
            </button>
            <button
              className="text-gray-500 ml-4"
              onClick={() => handleRenameClick(project.id)}
            >
              Rename
            </button>
            <button
              className="text-red-500 ml-4"
              onClick={() => handleDeleteClick(project.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    )}
  </li>
))}
</ul>

{showConfirmDelete && (
    <div className="border border-gray-400 rounded p-4 my-4">
      <p className="mb-4">Are you sure you want to delete this project?</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        onClick={handleDeleteConfirm}
      >
        Yes
      </button>
      <button
        className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeleteCancel}
      >
        No
      </button>
    </div>
  )}


  {showFloorplanWizard && (
    <div>
      <h2>New Project</h2>
      <label>
        Name:
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
        />
      </label>
      <button onClick={handleNewProjectSubmit}>Submit</button>
      <button onClick={handleNewProjectCancel}>Cancel</button>
    </div>
  )}


  {showPurchaseScreen && (
    <div>
      <h2>
        {purchasedProject ? purchasedProject.name : "Purchase Project"}
      </h2>
      {purchasedProject ? (
        <img src={purchasedProject.result} alt="Result" />
      ) : (
        <div>
          <h3>Step One: Name</h3>
          <input type="text" placeholder="Name" />

          <h3>Step Two: Description</h3>
          <textarea placeholder="Description" />

          <h3>Step Three: Purchase</h3>
          <p>Price: $10</p>
          <button>Buy Now</button>
        </div>
      )}
    </div>
  )}

  
    

  {showCreditsPrompt && (
    <div>
      <h2>Purchase Credits</h2>
      <p>How many credits do you want to purchase?</p>
      <input
        type="number"
        value={creditsToPurchase}
        onChange={(e) => setCreditsToPurchase(e.target.value)}
      />
      <p>Total: ${creditsToPurchase * 1}</p>
      <button onClick={handleCreditsSubmit}>Buy Now</button>
      <button onClick={handleCreditsCancel}>Cancel</button>
    </div>
  )}

  {showPurchaseForm && (
    <div>
      <h2>Complete Purchase</h2>
      <label>
        Name:
        <input
          type="text"
          value={purchaseFormData.name}
          onChange={(e) =>
            setPurchaseFormData({
              ...purchaseFormData,
              name: e.target.value,
            })
          }
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={purchaseFormData.email}
          onChange={(e) =>
            setPurchaseFormData({
              ...purchaseFormData,
              email: e.target.value,
            })
          }
        />
      </label>
      <label>
        Credit Card Number:
        <input
          type="text"
          value={purchaseFormData.cardNumber}
          onChange={(e) =>
            setPurchaseFormData({
              ...purchaseFormData,
              cardNumber: e.target.value,
            })
          }
        />
      </label>
      <button onClick={handlePurchaseFormSubmit}>Submit</button>
      <button onClick={() => setShowPurchaseForm(false)}>Cancel</button>
    </div>
  )}