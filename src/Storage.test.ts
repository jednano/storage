import { Storage } from './Storage'

describe(`${Storage.name} class`, () => {
	it('exports a class named Storage', () => {
		expect(Storage.name).toBe('Storage')
		expect(new Storage() instanceof Storage).toBe(true)
	})

	it('sets and gets an item', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		expect(storage.getItem('foo')).toBe('bar')
	})

	it('sets an `undefined` value as "undefined"', () => {
		const storage = new Storage()
		storage.setItem('foo', undefined as any)
		expect(storage.getItem('foo')).toBe('undefined')
	})

	it('sets a number to a string', () => {
		const storage = new Storage()
		storage.setItem('foo', 42 as any)
		expect(storage.getItem('foo')).toBe('42')
	})

	it('removes an item', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		storage.removeItem('foo')
		expect(storage.getItem('foo')).toBeNull()
	})

	it('gets length', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		expect(storage.length).toBe(1)
	})

	it('clears all items', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		storage.setItem('baz', 'qux')
		storage.clear()
		expect(storage.length).toBe(0)
	})

	it('gets a key by index', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		expect(storage.key(0)).toBe('foo')
	})

	it('returns null when requesting a key index that does not exist', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		expect(storage.key(1)).toBeNull()
	})

	it('returns first key when requesting a key index of `NaN`', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		expect(storage.key(NaN)).toBe('foo')
	})

	it('returns first key when requesting a key index of "x"', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		expect(storage.key('x' as any)).toBe('foo')
	})
})
