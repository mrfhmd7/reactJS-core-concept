import logo from './logo.svg';
import './App.css';

const singer1 = { name: 'Mr. X', job: 'singing' };
const singer2 = { name: 'Mrs. X', job: 'singing' };

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '5px',
  borderRadius: '5px',
}

function App() {
  return (
    <div className="App">
        <div className="welcome">
        <h2 style={singerStyle}>This is my first React App project.</h2>
        </div>
        {/* <div className="music">
          <p style={singerStyle}>Name: {singer1.name} is a good in { singer1.job}.</p>
          <p style={{color: 'purple',backgroundColor: 'white',padding: '5px',borderRadius: '5px'}}>Name: {singer2.name} is a good at { singer2.job}.</p>
        </div> */}
      <Mine></Mine>
      <Friend></Friend>
      <Mine></Mine>
      <Friend></Friend>
    </div>
  );
}

function Mine() { 
  return (
    <div className='mine'>
      <h2>Name: Maruf Ahmed</h2>
      <h3>Profession: Web development</h3>
    </div>
  )
}

function Friend() { 
  return (
    <div className='friend'>
      <h2>Name: Mr. X</h2>
      <h3>Profession: Data Science/Web development</h3>
    </div>
  )  
}

export default App;
