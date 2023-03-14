import { useState, useEffect } from "react";
import api from "../../constants/api";
import { useWallet } from "@solana/wallet-adapter-react";

const Auth = (props) => {
	const [isUser, setIsUser] = useState(false);
	const [isWallet, setIsWallet] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const wallet = useWallet();

	useEffect(() => {
		if (wallet) {
			setIsWallet(wallet);
		}
	}, [wallet]);

	const onChange = (event, val) => {
		const entry = event.target.value;
		if (val === "name") {
			setName(entry);
		} else if (val === "email") {
			setEmail(entry);
		} else if (val === "password") {
			setPassword(entry);
		}
	};

	const onSignUp = (name, email, password, wallet) => {
		console.log(name, email, password, wallet);
		fetch(api.userRoutes + "register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				password,
				wallet,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSignUp(name, email, password, isWallet.publicKey.toBase58());
	};

	const signUp = (
		<div>
			<button onClick={() => setIsUser(true)}>
				Already Registered? Click Here
			</button>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						onChange={(e) => onChange(e, "name")}
					/>
				</label>
				<label>
					Email:
					<input
						type="text"
						name="email"
						onChange={(e) => onChange(e, "email")}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						onChange={(e) => onChange(e, "password")}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	);

	const login = (
		<div>
			<button onClick={() => setIsUser(false)}>
				Not Registered? Click Here
			</button>
			<form>
				<label>
					Email:
					<input type="text" name="email" />
				</label>
				<label>
					Password:
					<input type="password" name="password" />
				</label>
				<input type="button" value="Submit" />
			</form>
		</div>
	);

	return (
		<div>
			<div>{isUser === false ? signUp : login}</div>
		</div>
	);
};

export default Auth;
