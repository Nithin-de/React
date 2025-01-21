import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectState(prevstate => {
      return {
        ...prevstate,
        selectedProjectId: null,
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject></NewProject>
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">

        <ProjectsSideBar onStartAddProject={handleStartAddProject} />
        {content}
        

      </main>
    </>
  );
}

export default App;
