export default class WebStorage implements Storage {
	private storage: { [key: string]: string } = {}
	public get length() {
		return Object.keys(this.storage).length
	}
	public clear() {
		this.storage = {}
	}
	public getItem(key: string) {
		return this.storage[key]
	}
	public key(index: number) {
		return Object.keys(this.storage)[index]
	}
	public removeItem(key: string) {
		delete this.storage[key]
	}
	public setItem(key: string, value: string) {
		this.storage[key] = value.toString()
	}
}

// @ts-ignore
module.exports = Object.assign(exports.default, exports)
