import { PokeCard } from "./components/PokeCard"
import { Footer } from "./components/footer"
import { NavBar } from "./components/navBar"


function App() {


  return (
    <>
      <header className="bg-amber-300">
        <NavBar />
      </header>
      <main className="bg-slate-50">
        <PokeCard />
      </main>
      <footer className="bg-amber-300  shadow  dark:bg-gray-800 w-full">
        <Footer />
      </footer>
    </>
  )
}

export default App
