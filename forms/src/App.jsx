import Sidebar from './components/Sidebar';
import WizardForm from './components/WizardForm';

function App() {
  return (
    <div className="container-fluid">
      <div className="row row-height">
        <Sidebar />
        <div className="col-xl-8 col-lg-8 content-right" id="start">
          <WizardForm />
        </div>
      </div>

     
      </div>
    
  );
}

export default App;
