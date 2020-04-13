import {request} from './common/request';
import {parse} from "date-fns";

export function fetch() {
    return request('', {
        method: 'POST',
        body: {action: 'history'},
    })
        .then((response: any) => {
            if(response.result === 'ok') {
                return response.deals
                    .sort(sortByDate);
            }
            return Promise.reject(response.error);
        })
        .catch((error: any) => {
            console.log(error || '---> POST history failed');
            return Promise.reject(error);
        });
}


function sortByDate(a: any, b :any) {
    return +parse(b.finishDate, 'yyyy-MM-dd HH:mm:ss', new Date()) - +parse(a.finishDate, 'yyyy-MM-dd HH:mm:ss', new Date());
}

function negativeProfit(group: any[]) {
    return group.filter(item => parseFloat(item.profit) < 0).length === 2;
}

function equalActive(group: any[], asset: string) {
    return group.filter(item => item.asset === asset).length === 2;
}

function isValid(deal: any, group: any[]) {
    if (parseFloat(deal.profit) < 0  && negativeProfit(group)) {
        return false;
    } else if (equalActive(group, deal.asset)) {
        return false;
    } else if(group.length < 10) {
        return true;
    }
    return false;
}
