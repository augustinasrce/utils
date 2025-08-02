const waitForElementToExist = (selector) => {
    return new Promise(resolve => {
        if (selector()) resolve(selector())

        const observer = new MutationObserver(() => {
            if (selector()) {
                resolve(selector())
                observer.disconnect()
            }
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
        })
    })
}

const wait = () => {
    const delay = 400 + Math.floor(Math.random() * 600)
    return new Promise(resolve => { setTimeout(() => resolve(true) }, delay))
}

