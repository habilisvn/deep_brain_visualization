import { GraphCanvas, GraphEdge, GraphNode, darkTheme } from 'reagraph';
import { signal } from "@preact/signals-core";

function Graph({ nodes, edges }: { nodes: GraphNode[], edges: GraphEdge[] }) {
    const nodes_signal = signal(nodes);
    const edges_signal = signal(edges);

    return (
        <div className='rounded-[15px] border border-black overflow-hidden block relative h-[500px] w-full px-6'>
            <GraphCanvas
                theme={darkTheme}
                nodes={nodes_signal.value}
                edges={edges_signal.value}
            />
        </div>
    );
}

export default Graph;
