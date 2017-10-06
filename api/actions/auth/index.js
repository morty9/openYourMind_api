module.exports = (api) => {
    return {
        login: require('./login')(api)
    };
};
