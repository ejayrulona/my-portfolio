import "./styles/global.css";

import Grain from "./components/Grain";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-black min-h-screen text-white overflow-x-hidden">
			<Grain />
			<Cursor />
			<Navbar />
			<main>
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;