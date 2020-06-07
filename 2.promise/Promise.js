const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";

const resolvePromise = (promise,x,resolve,reject) => {

}

class Promise {
    constructor (executor) {

        this.status = "PENDING";

        this.value = void 0;
        this.reason = void 0;

        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            
            if (this.status === PENDING) {
                this.value = value;
                this.status = RESOLVED;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }

        const reject = (reason) => {
            if (this.status === PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }

        try {
            executor(resolve,reject);
        }catch (e) {
            reject(e);
        }

    }
    then (onfullfilled,onrejected) {
        
        let promise2 = new Promise((resolve,reject) => {
            if (this.status === RESOLVED) {
                try {
                    setTimeout(() => {
                        let x = onfullfilled(this.value);
    
                        // x 可能是普通值, 也可能是 promise
                        // 判斷 x 的值 --> promise 2 的狀態
                        resolvePromise(promise2,x,resolve,reject);
                    },0);
                }catch(e) {
                    reject(e);
                }
            }
            if (this.status === REJECTED) {
                try {
                    setTimeout(() => {
                        let x = onrejected(this.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    },0);
                }catch(e) {
                    reject(e);
                }
            }
    
            if (this.status === PENDING) {
                // 非同步處理
                this.onResolvedCallbacks.push(() => {
                    try {
                        setTimeout(() => {
                            let x = onfullfilled(this.value);
        
                            // x 可能是普通值, 也可能是 promise
                            // 判斷 x 的值 --> promise 2 的狀態
                            resolvePromise(promise2,x,resolve,reject);
                        },0);
                    }catch(e) {
                        reject(e);
                    }
                })
                this.onRejectedCallbacks.push(() => {
                    try {
                        setTimeout(() => {
                            let x = onrejected(this.reason);
                            resolvePromise(promise2,x,resolve,reject);
                        },0);
                    }catch(e) {
                        reject(e);
                    }
                })
            }
        })

        return promise2;
    }
}

module.exports = Promise;