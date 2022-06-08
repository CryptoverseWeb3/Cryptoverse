import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const NEWS_RAPIDAPI_HOST = process.env.REACT_APP_NEWS_RAPIDAPI_HOST;
const NEWS_RAPIDAPI_KEY = process.env.REACT_APP_NEWS_RAPIDAPI_KEY;
const NEWS_API_URL = process.env.REACT_APP_NEWS_API_URL;


const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': NEWS_RAPIDAPI_HOST,
    'X-RapidAPI-Key': NEWS_RAPIDAPI_KEY
}

const baseUrl = NEWS_API_URL;

const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders});


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({
                        newsCategory,
                        count
                    }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi