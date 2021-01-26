import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [alcohol, setAlcohol] = useState(0);

function handleSubmit(e) {
  e.preventDefault();
  let result = 0;
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let leftover = grams - (burning * time)

  
  if (gender === 'male') {
    result = leftover / (weight * 0.7)
  }
  else {
    result = leftover / (weight * 0.6)
  }
  setAlcohol(result)
}

  return (
  <div className="container mt-5">
  <h3>Calculating alcohol blood levels</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-group col-2">
        <label>Weight:</label>
        <input className="form-control" name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>

      <div className="form-group col-2">
        <label>Bottles:</label>
        <input className="form-control" name="bottles" type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)}></input>
      </div>

      <div className="form-group col-2">
        <label>Time:</label>
        <input className="form-control" name="time" type="number" step="1" value={time} onChange={e => setTime(e.target.value)}></input>
      </div>

        <label>Gender:</label>
      <div className="form-group">
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input className="space" type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <hr className="col-6"></hr>

      <button className="btn btn-primary mt-2 mb-4 rounded">Calculate</button>

      <div className="form-group">
        <label><h4>Alcohol in your blood:</h4></label> <br></br>
        <output> <h4> {alcohol.toFixed(2)} </h4> </output>
      </div>
    </form>
    </div>
  );
}

export default App;