const host = (base_url: string) => `https://${base_url}/`
const genesis = 'https://test.gnzs.ru/oauth/get-token.php'
const x_client_id = 31550986

export default {
    host,
    baseURL: (base_url) => host(base_url) + 'api/v4/',
    x_client_id,
    genesis
}