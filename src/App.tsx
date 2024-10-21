import './App.css'
import Graph from './components/Graph';

function App() {
    const nodes = [
        {
            id: '1',
            label: '1'
        },
        {
            id: '2',
            label: '2'
        },
        {
            id: '3',
            label: 'ahihi'
        }
    ];

    const edges = [
        {
            source: '1',
            target: '2',
            id: '1-2',
            label: '1-2'
        },
        {
            source: '2',
            target: '1',
            id: '2-1',
            label: '2-1'
        },
        {
            source: '1',
            target: '3',
            id: '1-3',
            label: '1-3'
        }
    ];

    return (
        <div className="App">
            <Graph nodes={nodes} edges={edges} />
        </div>
    );
}

export default App
