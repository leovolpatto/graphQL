interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  port: number|string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  port: process.env.PORT || (process.env.LISTENING_PORT || 5001)
};