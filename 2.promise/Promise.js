const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";

class Promise {
    constructor (executor) {

        this.status = "PENDING";

        this.value = void 0;
        this.reason = void 0;

        const resolve = (value) => {
            if (this.status === PENDING) {
                this.value = value;
                this.status = RESOLVED;
            }
        }

        const reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
            }
        }

        try {
            executor(resolve,reject);
        }catch (e) {
            reject(e);
        }

    }
    then (onfullfilled,onrejected) {
        if (this.status === RESOLVED) {
            onfullfilled(this.value);
        }
        if (this.status === REJECTED) {
            onrejected(this.reason);
        }
    }
}

module.exports = Promise;