export default function getOptions(levelDefault = 2, amountDefault = 4) {
    const level = getOptionValue(getOption('level'), levelDefault);
    const amount = getOptionValue(getOption('amount'), amountDefault);

    return {
        level,
        amount
    };
}

function getOption(optionName) {
    return process.argv.find(element => element.includes(optionName));
}

function getOptionValue(option, defaultValue) {
    if (option) {
        const [, value] = option.split('=');
        return parseInt(value, 10);
    }

    return defaultValue;
}