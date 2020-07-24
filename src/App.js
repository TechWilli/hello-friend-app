import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import SectionLayout from './components/section-layout/SectionLayout';
import Footer from './components/footer/Footer';
import { ReactComponent as GithubLogo } from './assets/github-logo.svg';
import { ReactComponent as LinkedInLogo } from './assets/linkedin-logo.svg';
import { ReactComponent as GmailLogo } from './assets/gmail-logo.svg';

function App() {
	return (
		<div className="app">
			<GlobalStyles />

			<SectionLayout id={'hello-friend'} backgroundColor={'#353B47'}>
				<div>
					<h1 className="text-white font-weight-bold">Hello Friend</h1>
					<div>
						<a href="#are-you-there" className="send-to">
							<button type="button" className="interactive-btn" style={{ backgroundColor: '#1878C9' }}>HELLO</button>
						</a>
					</div>
				</div>
			</SectionLayout>

			<SectionLayout id={'are-you-there'} backgroundColor={'#1878C9'}>
				<div>
					<h1 className="text-white font-weight-bold">Are you there?</h1>
					<div className="d-flex justify-content-center">
						<div className="mx-2">
							<a href="#good" className="send-to">
								<button type="button" className="interactive-btn" style={{ backgroundColor: '#353B47' }}>YES</button>
							</a>
						</div>
						<div className="mx-2">
							<a href="#hello-friend" className="send-to">
								<button type="button" className="interactive-btn" style={{ backgroundColor: '#353B47' }}>NO</button>
							</a>
						</div>
					</div>
				</div>
			</SectionLayout>

			<SectionLayout id={'good'} backgroundColor={'#353B47'}>
				<div>
					<h1 className="text-white font-weight-bold">GOOD! <span role="img" aria-label="grateful emoji">😊</span></h1>
					<div>
						<a href="#hello-friend" className="send-to">
							<button type="button" className="interactive-btn" style={{ backgroundColor: '#1878C9' }}>GO BACK</button>
						</a>
					</div>
				</div>

			</SectionLayout>

			<Footer>
				<span className="text-white">Made with <span role="img" aria-label="blue heart">💙</span> by William</span>
				<div className="mt-3 d-flex justify-content-around align-items-center">
					<div >
						<GithubLogo className="mx-3" width="35" height="35" style={{ cursor: 'pointer' }}/>
						<LinkedInLogo className="mx-3" width="32" height="32" style={{ cursor: 'pointer' }}/>
						<GmailLogo className="mx-3" width="40" height="40" style={{ cursor: 'pointer' }}/>
					</div>
				</div>
			</Footer>
		</div>
	);
}

export default App;
