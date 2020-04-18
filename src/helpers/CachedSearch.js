export default class CachedSearch {

    constructor(requestFunction, saveFunction, cacheCallback, logFunction) {
        this.requestFunction = requestFunction;
        this.saveFunction = saveFunction;
        this.cacheCallback = cacheCallback;
        this.logFunction = logFunction;
        this.cache = {};
    }

    changeQuery = query => {
        const query_string = Object.values(query).join('/');
        if (this.cache[query_string]) {
            this.logFunction(`query retrieved from cache: ${query_string}`, 'success');
            this.saveFunction(this.cache[query_string]);
            this.cacheCallback(query);
        } else {
            this.requestFunction(query)
                .then(results => {
                    this.cache[query_string] = results;
                    this.logFunction(`query added to cache: ${query_string}`, 'success');
                    this.saveFunction(results);
                })
                .catch(e => {
                    this.cacheCallback(query);
                    this.logFunction(`CachedSearch: ${e.message}`, 'error');
                });
        }
    }

}