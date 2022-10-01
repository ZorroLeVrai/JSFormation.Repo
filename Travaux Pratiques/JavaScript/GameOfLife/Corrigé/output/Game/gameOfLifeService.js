class PathInformation {
    constructor(currentPostion, previousPosition, pathLength, estimatedCost) {
        this.estimatedCost = estimatedCost;
        this.previousNodePosition = null;
        this.pathLength = Number.MAX_VALUE;
        this.updateFullCost = () => this.fullCost = this.pathLength + this.estimatedCost;
        this.setPathLength = (previousNodePosition, pathLength) => {
            if (pathLength < this.pathLength) {
                this.previousNodePosition = previousNodePosition;
                this.pathLength = pathLength;
                this.updateFullCost();
            }
        };
        this.getFullCost = () => this.fullCost;
        this.currentPostion = currentPostion;
        this.setPathLength(previousPosition, pathLength);
    }
}
export default class GameOfLifeService {
    constructor(gameController) {
        this.gameController = gameController;
        this.updateNode = (currentPosition, previousPosition, pathLength) => {
            const numberPosition = currentPosition.toNumber();
            const currentNode = this.nodeToExplore.get(numberPosition);
            if (null != currentNode) {
                currentNode.setPathLength(previousPosition, pathLength);
            }
            else {
                this.nodeToExplore.set(numberPosition, this.createPathInformation(currentPosition, previousPosition, pathLength));
                this.setToExplorePosition(currentPosition);
            }
        };
        this.setToExplorePosition = (position) => {
            if (!position.isOnPosition(this.startPosition) && !position.isOnPosition(this.endPosition))
                this.gameController.setToExplorePosition(position);
        };
        this.setExploredPosition = (position) => {
            if (!position.isOnPosition(this.startPosition))
                this.gameController.setExploredPosition(position);
        };
        this.setPathPosition = (position) => {
            if (!position.isOnPosition(this.startPosition) && !position.isOnPosition(this.endPosition))
                this.gameController.setPathPosition(position);
        };
        this.createPathInformation = (currentPosition, previousPosition, pathLength) => new PathInformation(currentPosition, previousPosition, pathLength, this.getRemainingWeight(currentPosition));
        this.getRemainingWeight = (position) => {
            if (this.useHeuristic)
                return this.getDistanceToEndPoint(position);
            return 0;
        };
        this.getDistanceToEndPoint = (position) => {
            return this.getDistance(position, this.endPosition);
        };
        this.getDistance = (position1, posiotion2) => Math.sqrt(Math.pow((position1.x - posiotion2.x), 2) + Math.pow((position1.y - posiotion2.y), 2));
        this.isCurrentNodeCheaper = (bestNode, currentNode) => {
            const currentRelativeValue = currentNode.getFullCost() - bestNode.getFullCost();
            if (0 === currentRelativeValue)
                return currentNode.pathLength < bestNode.pathLength;
            return currentRelativeValue < 0;
        };
        this.getBestNode = () => {
            let bestNode = null;
            for (let currentNode of this.nodeToExplore.values()) {
                if (bestNode == null || this.isCurrentNodeCheaper(bestNode, currentNode))
                    bestNode = currentNode;
            }
            return bestNode;
        };
        this.getAdjacentNodes = (position) => {
            const result = [];
            for (let adjacentPosition of position.getAllAdjacentPositions()) {
                if (this.gameController.isInsideGrid(adjacentPosition)
                    && !this.gameController.isOnWall(adjacentPosition)
                    && !this.exploredNodes.has(adjacentPosition.toNumber())) {
                    result.push(adjacentPosition);
                }
            }
            return result;
        };
        this.setNodeAsExplored = (node) => {
            const key = node.currentPostion.toNumber();
            this.nodeToExplore.delete(key);
            this.exploredNodes.set(key, node);
            this.setExploredPosition(node.currentPostion);
        };
        this.nextStep = () => {
            let bestNode = this.getBestNode();
            if (null == bestNode)
                return false;
            if (bestNode.currentPostion.isOnPosition(this.endPosition)) {
                this.inferWholePath(bestNode);
                return false;
            }
            let adjacentPositions = this.getAdjacentNodes(bestNode.currentPostion);
            for (let adjacentPosition of adjacentPositions) {
                this.updateNode(adjacentPosition, bestNode.currentPostion, bestNode.pathLength + this.getDistance(bestNode.currentPostion, adjacentPosition));
            }
            this.setNodeAsExplored(bestNode);
            return true;
        };
        this.inferWholePath = (node) => {
            let currentNode = node;
            while (currentNode != null) {
                this.setPathPosition(currentNode.currentPostion);
                let previousPosition = currentNode.previousNodePosition;
                if (null == previousPosition) {
                    currentNode = null;
                }
                else {
                    currentNode = this.exploredNodes.get(previousPosition.toNumber());
                }
            }
        };
        this.updateNode(this.startPosition, null, 0);
    }
}
//# sourceMappingURL=gameOfLifeService.js.map