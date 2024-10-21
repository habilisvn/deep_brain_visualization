import { GraphCanvas, GraphEdge, GraphNode } from 'reagraph';
import { signal } from "@preact/signals-core";

function Barchart({ nodes, edges }: { nodes: GraphNode[], edges: GraphEdge[] }) {
    const nodes_signal = signal(nodes);
    const edges_signal = signal(edges);

    return (
        <GraphCanvas
            nodes={nodes_signal.value}
            edges={edges_signal.value}
        />
    );
}

export default Barchart;
