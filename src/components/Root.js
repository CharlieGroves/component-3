import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../context/AuthenticationContext";
import "../css/Loader.css";
import { firestore } from "../firebase";

import { googleProvider } from "../context/authMethods";
import socialMediaAuth from "../socialMediaAuth";

export default function Root() {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const { currentUser } = useAuth();

	const handleSignIn = async (provider) => {
		setLoading(true);
		const res = await socialMediaAuth(provider);
		const userRef = firestore.collection("users");
		const { uid, displayName } = currentUser;

		await userRef.doc(uid).set({
			username: displayName,
			id: uid,
			url: uid,
			shops: [],
			admin: false,
		});
		setLoading(false)
		//history.push("/home");
	};

	return (
		<div>
			<button onClick={() => handleSignIn(googleProvider)}>Google</button>
			{loading && <div className="loader" />}
		</div>
	);
}
