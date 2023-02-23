import './App.css'
import { useState } from 'react'

function App() {
  const [markdown, setMarkdown] = useState("")

  const handleInput = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className="app">
      <header id="header"></header>
      <main id="main">
        <textarea id="editor" onChange={handleInput} />
        <div id="preview">
          {markdown}
        </div>
      </main>
      <footer id="footer"></footer>
    </div>
  )
}

export default App
