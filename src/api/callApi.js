import axiosClient from "./axiosClient";

const callApi = {
    getID: (id) => {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    getBook: () => {
        const url = '/book';
        return axiosClient.get(url);
    },
    getStationery: () => {
        const url = 'stationery';
        return axiosClient.get(url);
    },
    getBookID: (id) => {
        const url = `/book/${id}`;
        return axiosClient.get(url);
    },
    getStationeryID: (id) => {
        const url = `/book/${id}`;
        return axiosClient.get(url);
    },
    postBill: (params) => {
        const url = '/bill';
        console.log(params)
        axiosClient.post(url, params);
    },
}
export default callApi;