import './App.css';
import AutoCompleteText from './AutoCompleteText';
import Countries from './Countries';

function App() {
    return (
        <div className="App">
            <div className="App-Component">
                <AutoCompleteText items={Countries} />
            </div>
        </div>
    );
}

export default App;
