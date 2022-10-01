import GameController from './gameController.js';


export default class AnimationController
{
  //private pathFinder: PathFinderService;
  private isAnimationOn = true;
  private intervalDelay: number;
  private lastUpdate: number = -Number.MAX_VALUE;

  constructor(private gameController: GameController)
  {
  }

  start = () =>
  {
    //this.pathFinder = pathFinder;
    this.intervalDelay = this.gameController.getIntervalTime();
    window.requestAnimationFrame(this.animationLoop);
    this.isAnimationOn = true;
  }

  stop = () => 
  {
    this.isAnimationOn = false;
  }

  private animationLoop = (timeStamp: number) =>
  {
    if (this.isAnimationOn)
      window.requestAnimationFrame(this.animationLoop);

    if (timeStamp - this.lastUpdate < this.intervalDelay)
      return;

    this.lastUpdate = timeStamp;

    this.gameController.handleNextGeneration();
  }
}