import {Octokit} from '@octokit/rest';
import {ITEMS_PER_PAGE} from "../helpers/constants";

const octokit = new Octokit();

export const getRepos = async (search_request = '', page = 1, abort_controller = null) => {
    const query = {
        q: search_request,
        sort: 'stars',
        order: 'desc',
        per_page: ITEMS_PER_PAGE,
        page,
    };
    if (abort_controller) {
        query.request = {
            signal: abort_controller.signal,
        };
    }
    return octokit.search.repos(query)
        .then(response => {
            return response.data;
        })
};