import "./app.css"
import App from "./App.svelte"

// Initialize theme early to avoid FOUC. Default: dark
(() => {
  try {
    const stored = localStorage.getItem('theme')
    const dark = stored ? stored === 'dark' : true
    document.documentElement.classList.toggle('dark', dark)
  } catch {}
})()

const target = document.getElementById("app")
if (!target) throw new Error("Root #app not found")
// Work around TS constructor signature mismatch in some setups
const app = new (App as any)({ target })

export default app
