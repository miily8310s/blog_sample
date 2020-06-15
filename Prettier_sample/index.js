class Worker {
    constructor(name) {
        this.name = name
    }
}

const job = (name, wage) => {
    console.log(name)
    console.log(wage)
}

job('trucker', '500000')
