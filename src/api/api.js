import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

export const getRepos = async (search_request = '', page = 1) => {
    let response = await octokit.search.repos({
        q: search_request,
        sort: 'stars',
        order: 'desc',
        per_page: 30,
        page
    });
    return response.data;
};