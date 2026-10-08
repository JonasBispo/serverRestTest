module.exports = {
    default: {
        requireModule: ['tsx/cjs'],
        require: [
            'steps/**/*.ts',
            'support/**/*.ts'
        ],
        paths: [
            'features/**/*.feature'
        ]
    }
};