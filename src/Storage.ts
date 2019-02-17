import { WebStorage } from './types'

/**
 * Allows the addition, modification, or deletion of stored data items.
 */
export default class Storage implements WebStorage {
	private storage: { [key: string]: string } = {}

	/**
	 * Returns an integer representing the number of data items stored in the
	 * `Storage` object.
	 */
	public get length() {
		return Object.keys(this.storage).length
	}

	/**
	 * When invoked, will empty all keys out of the storage.
	 */
	public clear() {
		this.storage = {}
	}

	/**
	 * When passed a key name, will return that key's value.
	 */
	public getItem(key: string) {
		return this.storage[key]
	}

	/**
	 * When passed a number `index`, this method will return the name of the
	 * nth key in the storage.
	 */
	public key(index: number) {
		return Object.keys(this.storage)[index]
	}

	/**
	 * When passed a key name, will remove that key from the storage.
	 */
	public removeItem(key: string) {
		delete this.storage[key]
	}

	/**
	 * When passed a key name and value, will add that key to the storage,
	 * or update that key's value if it already exists.
	 */
	public setItem(
		key: string,
		/**
		 * The value is converted into a string.
		 */
		value: string,
	) {
		this.storage[key] = value.toString()
	}
}

// @ts-ignore
module.exports = Object.assign(exports.default, exports)
