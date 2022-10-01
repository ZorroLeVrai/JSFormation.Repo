export default class AnimationController {
    constructor(gameController) {
        this.gameController = gameController;
        //private pathFinder: PathFinderService;
        this.isAnimationOn = true;
        this.lastUpdate = -Number.MAX_VALUE;
        this.start = () => {
            //this.pathFinder = pathFinder;
            this.intervalDelay = this.gameController.getIntervalTime();
            window.requestAnimationFrame(this.animationLoop);
            this.isAnimationOn = true;
        };
        this.stop = () => {
            this.isAnimationOn = false;
        };
        this.animationLoop = (timeStamp) => {
            if (this.isAnimationOn)
                window.requestAnimationFrame(this.animationLoop);
            if (timeStamp - this.lastUpdate < this.intervalDelay)
                return;
            this.lastUpdate = timeStamp;
            this.gameController.handleNextGeneration();
        };
    }
}
//# sourceMappingURL=animationController.js.map