import './App.css'

function App() {

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="app">
      <header id="header"></header>
      <main id="main">
        <textarea id="editor" onChange={handleInput} />
        <div id="preview"></div>
      </main>
      <footer id="footer"></footer>
    </div>
  )
}

export default App
