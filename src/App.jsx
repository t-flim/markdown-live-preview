import "./App.css"
import logo from "./assets/github-mark-white.png"
import { useState } from "react"
import { marked } from "marked"

function App() {
  const [markdown, setMarkdown] = useState("")

  const handleInput = (e) => {
    setMarkdown(e.target.value)
  }

  const getMarkdownText = () => {
    return {__html:marked(markdown)}
  }

  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <header id="header">
        <h1 id="title">Markdown Live Preview</h1>
      </header>
      <main id="main">
        <textarea id="editor" value={markdown} onChange={handleInput} />
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </main>
      <footer id="footer">
        <p id="footer-content">&copy; {currentYear} | thefulim.my</p>
        <a  href=""><img id="footer-logo" src={logo} /></a>
      </footer>
    </div>
  )
}

export default App
