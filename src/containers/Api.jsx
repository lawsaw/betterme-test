import React, { useEffect } from 'react';
import { getRepos } from "../api/api";

const Api = () => {

    const get = async () => {
        let data = await getRepos('react', 1);
        console.log(data);
    };

    useEffect(() => {
        get()
    });

    return null
};

export default Api