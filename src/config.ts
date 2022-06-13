const getEnv = (key: string) => {
  const env = process.env[key]
  if (env) {
    return env
  }
  throw `missing env: ${key}`
}

type Config = {
  logLevel: string
  nodeEnv: string
}

export const config: Config = {
  logLevel: getEnv('LOG_LEVEL'),
  nodeEnv: getEnv('NODE_ENV'),
}
