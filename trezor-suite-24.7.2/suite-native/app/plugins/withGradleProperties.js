/* eslint-disable @typescript-eslint/no-shadow */
const { withGradleProperties } = require('expo/config-plugins');

const newGraddleProperties = [];

module.exports = config =>
    withGradleProperties(config, config => {
        newGraddleProperties.map(gradleProperty => {
            const isPropertyAlreadySet = config.modResults.some(
                item => item.key === gradleProperty.key,
            );

            if (!isPropertyAlreadySet) {
                // push empty line to separate properties
                config.modResults.push({
                    type: 'empty',
                });
                config.modResults.push(gradleProperty);
            }

            return config.modResults;
        });

        return config;
    });