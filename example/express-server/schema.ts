import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  enum TestEnum {
    "A rosy color"
    RED
    "The color of martians and slime"
    GREEN
    "A feeling you might have if you can't use GraphQL"
    BLUE
  }

  input TestInput {
    string: String
    int: Int
    float: Float
    boolean: Boolean
    id: ID
    enum: TestEnum
    object: TestInput

    # List
    listString: [String]
    listInt: [Int]
    listFloat: [Float]
    listBoolean: [Boolean]
    listID: [ID]
    listEnum: [TestEnum]
    listObject: [TestInput]
  }

  "The interface"
  interface TestInterface {
    "Common name string."
    name: String
  }

  type First implements TestInterface {
    "Common name string for First."
    name: String

    first: [TestInterface]
  }

  type Second implements TestInterface {
    "Common name string for Second."
    name: String
    second: [TestInterface]
  }

  union TestUnion = First | Second

  type Test {
    "\`test\` field from \`Test\` type."
    test: Test

    "> union field from Test type, block-quoted."
    union: TestUnion

    "id field from Test type."
    id: ID

    "Is this a test schema? Sure it is."
    isTest: Boolean

    hasArgs(
      string: String
      int: Int
      float: Float
      boolean: Boolean
      id: ID
      enum: TestEnum
      object: TestInput

      # List
      listString: [String]
      listInt: [Int]
      listFloat: [Float]
      listBoolean: [Boolean]
      listID: [ID]
      listEnum: [TestEnum]
      listObject: [TestInput]
    ): String
  }

  "This is a simple mutation type"
  type MutationType {
    "Set the string field"
    setString(value: String): String
  }

  "This is a simple subscription type"
  type SubscriptionType {
    "Subscribe to the test type"
    subscribeToTest(id: String): Test
  }

  schema {
    query: Test
    mutation: MutationType
    subscription: SubscriptionType
  }
`);
