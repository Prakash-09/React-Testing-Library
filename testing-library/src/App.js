import './App.css';
// import SmallForm from './components/smallForm/SmallForm';
// import SampleApi from './components/mockApi/SampleApi';
// import SampleForm from './components/sampleForm/SampleForm';
import TextField from './components/onChange/TextField';
import SelectTag from './components/onChange/SelectTag';
import CheckBox from './components/onChange/CheckBox';

function App() {
  return (
    <div className="App">
      {/* <SmallForm firstName="sai" lastName="prakash" /> */}
      {/* <SampleApi /> */}
      {/* <SampleForm /> */}
      <TextField />
      <SelectTag />
      <CheckBox />
    </div>
  );
}

export default App;
