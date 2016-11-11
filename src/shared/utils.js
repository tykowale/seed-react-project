/**
 * Check proxy flag to point to specific
 * environment API host
 * @returns {string}
 */
export function resolveHost() {
    const proxy = {
        development: 'http://localhost:8081',
        production: 'http://your-production-doman.com'
    };

    return proxy[process.env.PROXY];
}
