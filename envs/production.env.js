
const envs = {
  URL: '//localhost:5000/',
  ASSETS_PATH: 'assets/',
}

envs.PUBLIC_PATH = `${envs.URL}${envs.ASSETS_PATH}`

module.exports = envs