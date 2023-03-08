import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

const Header = () => {
	return (
		<header>
			<div>Hello</div>
			<div>
				<WalletMultiButton />
			</div>
		</header>
	);
};

export default Header;
