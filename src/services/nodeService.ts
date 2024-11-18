// Service to get words from the API
import { GraphNode } from 'reagraph';


class NodeService {
    async getNodes(): Promise<GraphNode[]> {
        // return mock data instead of the result of api
        return [
            { id: '1', label: 'Node 1' },
            { id: '2', label: 'Node 2' },
            { id: '3', label: 'Node 3' }
        ];
    }
}

export default new NodeService();