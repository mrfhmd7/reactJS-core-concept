// import logo from './logo.svg';
import './App.css';

// const singer1 = { name: 'Mr. X', job: 'singing' };
// const singer2 = { name: 'Mrs. X', job: 'singing' };
const professions = [
  { name: 'Ashikur Rahman', job: 'Data science' },
  { name: 'Soubj Ahmed', job: 'Web development' },
  { name: 'Nafiz', job: 'Chemist' },
  { name: 'Imran', job: 'Immigrant'}
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '5px',
  borderRadius: '5px',
}

function App() {
  const friends = ['Ashikur Rahman', 'Sobuj Ahmed', 'Nafiz', 'Imran']
  return (
    <div className="App">
        <div className="welcome">
        <h2 style={singerStyle}>This is my first React App project.</h2>
        </div>
        {/* <div className="music">
          <p style={singerStyle}>Name: {singer1.name} is a good in { singer1.job}.</p>
          <p style={{color: 'purple',backgroundColor: 'white',padding: '5px',borderRadius: '5px'}}>Name: {singer2.name} is a good at { singer2.job}.</p>
        </div> */}
      <Mine name='Maruf Ahmed' job='Web Development'></Mine>
      {professions.map(profession => <Friend name={profession.name} job={profession.job}></Friend>)}
      {/* <Friend name='Ashikur Rahman' job='Data Science'></Friend> */}
      <Mine name='Maruf Ahmed' job='Cyber Security'></Mine>
      {friends.map(friend => <Friend name={friend} ></Friend>)}
      <Friend name='Sobuj Ahmed' job='Web Development'></Friend>
    </div>
  );
}

function Mine(props) { 
  return (
    <div className='mine'>
      <h2>Name: { props.name}</h2>
      <h3>Profession: {props.job}</h3>
    </div>
  )
}

function Friend(props) { 
  return (
    <div className='friend'>
      <h2>Name: { props.name}</h2>
      <h3>Profession: { props.job}</h3>
    </div>
  )  
}

export default App;
