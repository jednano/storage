import type { _Storage } from './types'

/**
 * Allows the addition, modification, or deletion of stored data items.
 */
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class Storage implements _Storage {
	private storage = new Map<string, string>()

	/**
	 * Returns an integer representing the number of data items stored in the
	 * `Storage` object.
	 */
	public get length() {
		return this.storage.size
	}

	/**
	 * When invoked, will empty all keys out of the storage.
	 */
	public clear() {
		this.storage = new Map()
	}

	/**
	 * When passed a key name, will return that key's value.
	 * @returns the value of the key or `null` if the key does not exist.
	 */
	public getItem(keyName: string) {
		return this.storage.get(keyName) ?? null
	}

	/**
	 * When passed a number `index`, this method will return the name of the
	 * nth key in the storage.
	 * @returns the value of the key or `null` if the key does not exist.
	 */
	public key(
		/**
		 * The number of the key for which you want the name. This is
		 * a zero-based value.
		 */
		index: number,
	) {
		return Array.from(this.storage.keys())[+index || 0] ?? null
	}

	/**
	 * When passed a key name, will remove that key from the storage.
	 */
	public removeItem(keyName: string) {
		this.storage.delete(keyName)
	}

	/**
	 * When passed a key name and value, will add that key to the storage,
	 * or update that key's value if it already exists.
	 * @throws if the storage is full. Particularly, in Mobile Safari
	 * (Safari sets the quota to `0` bytes in private mode, unlike other browsers,
	 * which allow storage in private mode using separate data containers.)
	 * Hence developers should make sure to **always** catch possible exceptions
	 * from `setItem()`**.
	 */
	public setItem(
		keyName: string,
		/**
		 * The value is converted into a string.
		 */
		value: string,
	) {
		this.storage.set(keyName, value + '')
	}
}
