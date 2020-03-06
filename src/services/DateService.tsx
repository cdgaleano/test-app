import moment from 'moment';

export const FormatDate = (_date: string, format: string): string => {
    return moment(_date).format(format)
}

export const ConverStringToDate = (_date: string): Date => {
    return moment(_date).toDate();
} 