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
    },
     current_user: {
        url: `${backendDomain}/api/user-details`,
        method: 'get'
    }
};
export default SummaryApi;