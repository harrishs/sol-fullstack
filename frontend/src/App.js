import Layout from "./Components/Layout/Layout";
import WalletContextProvider from "./contexts/WalletContextProvider";

function App() {
	return (
		<WalletContextProvider>
			<Layout />
		</WalletContextProvider>
	);
}

export default App;
