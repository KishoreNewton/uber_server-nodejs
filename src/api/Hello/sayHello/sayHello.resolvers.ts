import {
  SayHelloQueryArgs,
  SayHelloResponse
} from '../../../types/graph';

const resolvers = {
  Query: {
    sayHello: (
      _: undefined,
      args: SayHelloQueryArgs
    ): SayHelloResponse => {
      return {
        error: true,
        type: `Hello ${args.name}`
      };
    }
  }
};

export default resolvers;
