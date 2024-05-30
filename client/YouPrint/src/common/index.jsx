// signup api
const backendDomain = 'http://localhost:5000'

const SummaryApi = {
    Register : {
        url: `${backendDomain}/api/signup`,
        method: 'POST'
    },
     Login: {
        url: `${backendDomain}/api/signin`,
        method: 'POST'
    }
};
export default SummaryApi;