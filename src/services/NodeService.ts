// Service to get words from the API
import axios from 'axios';
// import { GraphNode } from 'reagraph';


class NodeService {
    async getNodes() {
        // request to localhost:8000/api/v1/words
        const response = await axios.get('http://localhost:8000/api/v1/words');
        return response.data;
    }
}

export default new NodeService();