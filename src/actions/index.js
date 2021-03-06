export const ADD_REMINDER = 'ADD_REMINDER';
export const REMOVE_REMINDER = 'REMOVE_REMINDER';
export const CLEAR_ALL = 'CLEAR_ALL';

export const addReminder = (text, date) => {
    return {
        type: ADD_REMINDER,
        todo: text,
        date
    }
}

export const deleteReminder = (id) => {
    return {
        type: REMOVE_REMINDER,
        id
    };
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}