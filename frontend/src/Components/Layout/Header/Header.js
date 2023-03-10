import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

const Header = () => {
	return (
		<header>
			<div>Header Left</div>
			<div>
				<WalletMultiButton />
			</div>
		</header>
	);
};

export default Header;
