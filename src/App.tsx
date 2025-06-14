import './App.css'
import axios from 'axios'

function App() {

  async function getRustService() {
    try {
      const response: Response = await axios.get('https://birthday-service-7gju.shuttle.app/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Birthday Service</h1>
      <div className="card">
        <button onClick={getRustService}>
          Call Rust Backend
        </button>
      </div>
      <p className="read-the-docs">
        Happy 26th Birthday Mya!
      </p>
    </>
  )
}

export default App
