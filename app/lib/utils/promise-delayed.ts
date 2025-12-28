

export default async function promiseDelayed<I>(value: I, delay: number = 1000) {
    return new Promise<I>(resolve => setTimeout(() => resolve(value), delay))
}