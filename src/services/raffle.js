export const EXCLUDED_EMAILS = [
    'fakiolasmarios@gmail.com',
    'fadamakis@gmail.com',
    'timosergiogr@gmail.com',
    'sergio_kagiema@live.com',
    'emazyka@gmail.com',
    'emazika@outlook.com',
    'panopoulos.and@gmail.com',
    'emazika@gmail.com'
];

export const parseCsvFile = (csv) => {
    const [, ...lines] = csv.split('\n');
    const timestampRegex = /^\d{1,2}\/\d{1,2}\/\d{4} \d{1,2}:\d{2}:\d{2},.+$/;
    const names = lines.reduce((acc = {}, line) => {
        const lineHasTimeStamp = line && timestampRegex.test(line);
        if (!lineHasTimeStamp) return acc;
        const [
            ,
            email,
            name
        ] = line.split(',');
        const quotesRegex = /['"]+/g;
        const key = !!email && email.trim().replace(quotesRegex, '') || '';
        const value = !!name && name.trim().replace(quotesRegex, '') || '';
        if (acc[key] || EXCLUDED_EMAILS.includes(key)) return acc;
        acc[key] = value;
        return acc;
    }, {});
    return Object.values(names);
};

export const uploadFile = (file) => {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = ({target: {result: file}}) => resolve(parseCsvFile(file));
    });
};

export const getRandomEntry = (entries) => {
    const random = Math.floor(Math.random() * entries.length);
    return entries[random];
};

export const setDeceleratingTimeout = (callback, factor, times, callbackEnd) => {
    const internalCallback = ((t, counter) => {
        return () => {
            if (--t > 0) {
                setTimeout(internalCallback, ++counter * factor);

                callback();
            } else {
                callbackEnd();
            }
        };
    })(times, 0);

    setTimeout(internalCallback, factor);
};
