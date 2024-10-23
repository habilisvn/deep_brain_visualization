import Graph from './components/graphs/index';
import { GraphEdge, GraphNode } from 'reagraph';
import NodeService from './services/NodeService';
import { useEffect, useState } from 'react';

function App() {
    const [nodes, setNodes] = useState<GraphNode[]>([]);

    // const nodes = [
    //     {
    //         id: '1',
    //         label: '1'
    //     },
    //     {
    //         id: '2',
    //         label: '2'
    //     },
    //     {
    //         id: '3',
    //         label: '????'
    //     }
    // ];

    const edges: GraphEdge[] = [
        {
            source: '6c8620e467404fb68f8379b70b3d50da',
            target: '6c08a3900d024a2196892c0f6f10d57d',
            id: '1-2',
            label: '1-2'
        },
        // {
        //     source: '2',
        //     target: '1',
        //     id: '2-1',
        //     label: '2-1'
        // },
        // {
        //     source: '1',
        //     target: '3',
        //     id: '1-3',
        //     label: '1-3'
        // }
    ];

    useEffect(() => {
        // async function to get words from the API
        (async () => {
            const res = await NodeService.getNodes();
            const nodes = res.map((node: GraphNode) => {
                return {
                    id: node.id,
                    label: node.label || 'Unknown'
                };
            });
            setNodes(nodes);
        })();
    }, []);

    return (
        <div className="App bg-gray-200 h-[800px] px-[20px]">
            <Graph nodes={nodes} edges={edges} />
        </div>
    );
}

export default App
