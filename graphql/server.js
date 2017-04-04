const app = require('express')();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

app.listen(7654, () => {
    console.log('Server running Now')
})

var schema = buildSchema(`
  type Query {
    name: String
    nationality: String
  }
`);

var root = {
  name: () => {
    return 'Ayyub'
  },
  nationality: () => {
    return 'Indonesia'
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


