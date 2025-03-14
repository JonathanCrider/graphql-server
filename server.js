import { graphql, buildSchema } from 'graphql'

const schema = buildSchema(`
    type Query {
      hello: String
    }
  `)

const rootValue = {
  hello: () => {
    return 'hello world!'
  }
}

const main = async () => {
  const res = await graphql({
    schema,
    source: '{ hello }',
    rootValue
  })
  console.log(res)
}

main()
