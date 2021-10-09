import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      const users = [
    {
      name: "Ben10",
      image:
        "https://m.media-amazon.com/images/M/MV5BMGU1MGQ1YTgtZTdkYi00ODI3LWFjMzItYmZkN2IxMmM0M2M4XkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_.jpg"
    },
    {
      name: "Naruto",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    },
    {
      name: "dragon ball z",
      image:
        "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg"
    }
  ];

  return (
    <div className="App">
      {users.map((user) => (
        <Msg name={user.name} pic={user.image} />
      ))}
    </div>
  );

  function Msg({ name, pic }) {
    return (
      <div>
        <img height="100" src={pic} alt={name} />
        <h2 className="name">{name}</h2>
      </div>
    );
  }
    </div>
  );
}

export default App;
