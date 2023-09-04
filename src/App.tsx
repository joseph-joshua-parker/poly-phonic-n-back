import { RecoilRoot } from 'recoil';


import SessionSetup from './components/SessionSetup';
import StimConfig from './components/StimConfig';


function App() {
  return (
    <RecoilRoot>
      <SessionSetup />
    </RecoilRoot>
  );
}

export default App;
