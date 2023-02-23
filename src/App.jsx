import './App.css'
import { useState } from 'react'
import { marked } from 'marked'

function App() {
  const [markdown, setMarkdown] = useState("")

  const handleInput = (e) => {
    setMarkdown(e.target.value)
  }

  const getMarkdownText = () => {
    return {__html:marked(markdown)}
  }

  return (
    <div className="app">
      <header id="header"></header>
      <main id="main">
        <textarea id="editor" value={markdown} onChange={handleInput} />
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </main>
      <footer id="footer"></footer>
    </div>
  )
}

export default App
