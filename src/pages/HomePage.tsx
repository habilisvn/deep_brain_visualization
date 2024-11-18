import GraphComponent from '../components/graphs/index'; // Importing the graph component
import { GraphNode, GraphEdge } from 'reagraph'; // Importing necessary types
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    // Default data for the graph component
    const defaultNodes: GraphNode[] = [
        { id: '1', label: 'Node 1' },
        { id: '2', label: 'Node 2' }
    ];

    const defaultEdges: GraphEdge[] = [
        { id: '1-2', source: '1', target: '2' }
    ];

    const handleLogout = () => {
        // Add any logout logic here if needed
        navigate('/login');
    };

    return (
        <div className="bg-gray-200 h-screen px-[20px] flex justify-between">
            <GraphComponent nodes={defaultNodes} edges={defaultEdges}/> {/* Adjusting the graph component to take 4/5 screen */}
            <button 
                onClick={handleLogout}
                className="h-fit mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Logout
            </button>
        </div>
    );
}

export default HomePage;
