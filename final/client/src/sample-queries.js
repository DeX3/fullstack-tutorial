import gql from 'graphql-tag';

const VALID_QUERY = gql`
  query valid {
    me {
      id
    }
  }
`;

const INVALID_QUERY = gql`
  query invalid {
    me() {
      id
    }
  }
`;
