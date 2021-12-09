import prizes from '@/services/prizes.json';
export const getPrizes = (list = prizes) => {
    return list.reduce((prizes = [], prize) => {
        for (let i = 0; i < prize.count; i++) {
            prizes.push({
                content: prize.content,
                fulltext: prize.fulltext
            });
        }

        return prizes;
    }, []);
};
