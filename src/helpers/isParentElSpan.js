const isParentElSpan = (activeElContainer) => {
    return activeElContainer.tagName.toLowerCase() !== 'span';
};

export default isParentElSpan;