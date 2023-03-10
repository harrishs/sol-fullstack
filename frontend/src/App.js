import Layout from "./Components/Layout/Layout";
import WalletContextProvider from "./contexts/WalletContextProvider";
import Auth from "./Components/Authentication/Auth";

function App() {
	return (
		<WalletContextProvider>
			<Layout>
				<Auth />
			</Layout>
		</WalletContextProvider>
	);
}

export default App;
