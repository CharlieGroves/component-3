import React, { useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";

import { useAuth } from "../context/AuthenticationContext";
import { firestore } from "../firebase";

import "../css/Titles.css";
import "../css/Buttons.css";
import "../css/ManageAccount.css";

export default function ManageAccount() {
	const { currentUser } = useAuth();
	const accountRef = firestore.collection("users").doc(currentUser.uid);
	const [accountInformation] = useDocumentData(accountRef);

	const [username, setUsername] = useState("");

	currentUser && console.log(currentUser);
	accountInformation && console.log(accountInformation);

	const updateAccount = async () => {};

	return (
		<div className="manage-account-container ml-2">
			<div className="title">Manage Account:</div>
			<form onSubmit={updateAccount} className="update-account-form">
				<label className="form-label shop-name-label">
					<div className="title-smaller">Username: &nbsp;</div>
					<input
						className="input"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						type="text"
					/>
				</label>
				<label className="form-label shop-name-label">
					<div className="title-smaller">URL: &nbsp;</div>
					<input className="input" required type="text" />
				</label>
				<label className="form-label shop-name-label">
					<div className="title-smaller">Name: &nbsp;</div>
					<input className="input" required type="text" />
				</label>
				<button type="submit" className="shop-button mt-2">
					Update
				</button>
			</form>
		</div>
	);
}
