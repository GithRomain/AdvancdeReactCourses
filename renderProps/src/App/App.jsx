import './App.css'
import DataFetcher from '../components/DataFetcher/DataFetcher';'../components/DataFetcher/DataFetcher';

function App() {

  return (
    <div className="App">
      <DataFetcher url="https://swapi.dev/api/people/1">
      {(data, loading) => {
                    return (
                        loading ? 
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFetcher>
    </div>
  )
}

export default App
