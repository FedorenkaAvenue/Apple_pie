module.exports = {
    env:  {
        GOOGLE_OAUTH_ID: process.env.GOOGLE_OAUTH_ID
    },
    async redirects() {
        return [
            {
                source: '/sign',
                destination: '/sign/in',
                permanent: true
            }
        ]
    },
    basePath: '/v2',
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/v2'
            }
        ]
    }
}
