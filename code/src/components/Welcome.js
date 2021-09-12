import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

import { googleProvider } from "../context/authMethods";
import socialMediaAuth from "../socialMediaAuth";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

import "../css/Buttons.css";
import "../css/Loader.css";
import "../css/SignIn.css";
import "../css/Welcome.css";
import "../css/Titles.css";
import "../css/Margins.css";
import "../css/Paddings.css";

export default function Welcome() {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	return (
		<div className="welcome-container">
			<div className="welcome-header">
				<div className="welcome-header-app-name title">
					App Name TBD
				</div>
				<div className="welcome-header-sign-in">
					<SignInWithGoogleButton
						loading={loading}
						setLoading={setLoading}
						socialMediaAuth={socialMediaAuth}
						history={history}
						GoogleButton={GoogleButton}
						googleProvider={googleProvider}
					/>
				</div>
			</div>
			<div className="welcome-body-container">
				<div className="welcome-body-main-section-container">
					<div className="welcome-body-main-section-heading pt-8 title-smaller">
						Are you a small buisness owner, or want to take more
						control of your ecommerce website?
					</div>
					<br />
					<div>test</div>
				</div>
			</div>
		</div>
	);
}
