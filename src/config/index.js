import env from "../env.json";

const config = {
    app: {
        id: env.projectId,
        name: env.projectName || 'App'
    },
    endpoint: {
        punkApi: env.punkApiEndpoint
    }
}

export default config;