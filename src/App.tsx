import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Cards";

const App: React.FC = () => {
	return (
		<>
			<div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] via-[#fdf4ff] to-[#fffafc] dark:from-[#0f172a] dark:to-[#1e293b]">
				<Header />
				<Routes>
					<Route path="/" element={<Cards />} />
					<Route path="/cart" element={<CardDetails />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
