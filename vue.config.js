module.exports = {
    ...(process.env.NODE_ENV === 'production') && {
        // make path relative for Github
        publicPath: './'
    }
};
