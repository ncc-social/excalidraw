import { Excalidraw } from "@excalidraw/excalidraw"

function App() {

  return (
    <>
      <h1 style={{ textAlign: "center", fontFamily: 'Inter' }}>Whiteboard App</h1>
      <div style={{ height: "90vh" }}>
        <Excalidraw />
      </div>
    </>
	// <div className="App">
	//   <FrappeProvider>
	// 	<div>
	//   <div>
	// 	<a href="https://vitejs.dev" target="_blank">
	// 	  <img src="/vite.svg" className="logo" alt="Vite logo" />
	// 	</a>
	// 	<a href="https://reactjs.org" target="_blank">
	// 	  <img src={reactLogo} className="logo react" alt="React logo" />
	// 	</a>
	//   </div>
	//   <h1>Vite + React + Frappe</h1>
	//   <div className="card">
	// 	<button onClick={() => setCount((count) => count + 1)}>
	// 	  count is {count}
	// 	</button>
	// 	<p>
	// 	  Edit <code>src/App.jsx</code> and save to test HMR
	// 	</p>
	//   </div>
	//   <p className="read-the-docs">
	// 	Click on the Vite and React logos to learn more
	//   </p>
	//   </div>
	//   </FrappeProvider>
	// </div>
  )
}

export default App
