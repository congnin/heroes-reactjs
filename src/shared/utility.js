import titleize from 'titleize';
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const toUpperCase = value => value ? titleize(value) : '';