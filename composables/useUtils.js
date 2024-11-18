const useUtils = () => {
    const formatPrice = (price) => {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US');
    }

    return {formatPrice, formatDate};
}

export {useUtils};