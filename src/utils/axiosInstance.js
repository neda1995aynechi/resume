import axios from "axios"
import {toast} from "react-toastify";

const axiosInstance = axios.create({
    baseURL: "http://65.109.0.142:1400/", // Base URL for your API
});

export const getLandingData = async () => {
    try {
        const response = await axiosInstance.get("api/v1/landing/");
        return response.data; // Return data from the response
    } catch (error) {
        throw error; // Throw error if request fails
        toast("An error occured please try again")
    }
};

export const getLandingSocialData = async () => {
    try {
        const response = await axiosInstance.get("api/v1/landing_social/");
        return response.data; // Return data from the response
    } catch (error) {
        throw error; // Throw error if request fails
        toast("An error occured please try again")
    }
};

export const getAboutData = async () => {
    try {
        const response = await axiosInstance.get("about/api/v1/about/");
        return response.data; // Return data from the response
    } catch (error) {
        throw error; // Throw error if request fails
        toast("An error occured please try again")
    }
};

export const getProjectsData = async () => {
    try {
        const response = await axiosInstance.get("project/api/v1/project/");
        return response.data; // Return data from the response
    } catch (error) {
        throw error; // Throw error if request fails
        toast("An error occured please try again")
    }
};

export const getArticleData = async () => {
    try {
        const response = await axiosInstance.get("article/api/v1/article/");
        return response.data; // Return data from the response
    } catch (error) {
        throw error; // Throw error if request fails
        toast("An error occured please try again")
    }
};

export const getArticleTitleData = async () => {
    try {
        const response = await axiosInstance.get("article/api/v1/article_title/");
        return response.data; // Return data from the response
    } catch (error) {
        throw error; // Throw error if request fails
        toast("An error occured please try again")
    }
};

export default axiosInstance;
