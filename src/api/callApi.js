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
        const url = '/stationery';
        return axiosClient.get(url);
    },
    getBookID: (id) => {
        const url = `/book/${id}`;
        return axiosClient.get(url);
    },
    getStationeryID: (id) => {
        const url = `/stationery/${id}`;
        return axiosClient.get(url);
    },
    postBill: (params) => {
        const url = '/bill';
        axiosClient.post(url, params);
    },
    getBill: () => {
        const url = '/bill';
        return axiosClient.get(url);
    },
    updateState: (params) => {
        const url = '/bill';
        return axiosClient.put(url, params);
    },
}
export default callApi;