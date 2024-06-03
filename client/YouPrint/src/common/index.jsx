// signup api
const backendDomain = 'http://localhost:5000'

const SummaryApi = {
    Register : {
        url: `${backendDomain}/api/signup`,
        method: 'post'
    },
     Login: {
        url: `${backendDomain}/api/signin`,
        method: 'post'
    }
};
export default SummaryApi;