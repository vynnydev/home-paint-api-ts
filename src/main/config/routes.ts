import { Express } from 'express';

import roomRouter from '@main/routes/room/RoomRouter';
import firstWallRouter from '@main/routes/firstWall/FirstWallRouter';
import secondWallRouter from '@main/routes/secondWall/SecondWallRouter';
import thirdWallRouter from '@main/routes/thirdWall/ThirdWallRouter';
import fourthWallRouter from '@main/routes/fourthWall/FourthWallRouter';

export default (app: Express): void => {
  app.use(`/api/v1/home-paint`, roomRouter.router);
  app.use(`/api/v1/home-paint`, firstWallRouter.router);
  app.use(`/api/v1/home-paint`, secondWallRouter.router);
  app.use(`/api/v1/home-paint`, thirdWallRouter.router);
  app.use(`/api/v1/home-paint`, fourthWallRouter.router);
};
