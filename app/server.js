const {ApolloServer, gql} = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    config: {
      projects: {
        test: {
          extensions: {
            endpoints: {
              'node-local': {
                url: 'http://node.local'
              },
              'node2-local': {
                url: 'http://node2.local',
                headers: {
                  Authorization: 'Basic dGVzdDp0ZXN0',
                  'Access-Control-Allow-Origin': '*'
                }
              }
            }
          }
        }
      }
    }
  }
});

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
