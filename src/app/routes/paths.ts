import pathCreator from '../../utils/pathCreator';

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

const RoutePaths = {
  _: pathCreator('/'),
  SignIn: {
    _: pathCreator('/signin')
  },
  Registration: {
    _: pathCreator('/registration')
  }
};

export default RoutePaths;
