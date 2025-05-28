import './App.css';
import '../../styles/style.scss';
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import Navigation from '../navigation/Navigation'
import Projects from '../projects/Projects'
import Talks from '../talks/Talks'

import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';


function App() {
  console.log(process.env)

  let applicationId = ''
  if (process.env.DD_APPLICATION_ID) {
    applicationId = process.env.DD_APPLICATION_ID
  }
  let clientToken = ''
  if (process.env.DD_CLIENT_TOKEN) {
    clientToken = process.env.DD_CLIENT_TOKEN
  }

  if (process.env.DD_ENABLE) {
    datadogRum.init({
      applicationId: applicationId,
      clientToken: clientToken,
      site: 'us5.datadoghq.com',
      service: 'portfolio',
      env: 'production',

      // Specify a version number to identify the deployed version of your application in Datadog
      version: '1.0.0',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      defaultPrivacyLevel: 'mask-user-input',
      plugins: [reactPlugin({ router: true })],
    });
  }

  return (
    <section className="App">
      <Navigation />
      <div className="content">
        <Home />
        <Projects />
        <Talks />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}

export default App;
