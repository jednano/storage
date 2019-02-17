/* eslint-env node, jest */
import Storage from './Storage'
import commonJSModule = require('./Storage')

describe('Storage class', () => {
	it('exports a CommonJS module for npm compatibility', () => {
		expect(commonJSModule).toBe(Storage)
	})

	it('exports a circular default prop', () => {
		// @ts-ignore
		expect(Storage.default.default).toBe(Storage)
	})

	it('exports a class named Storage', () => {
		expect(Storage.name).toBe('Storage')
		expect(new Storage() instanceof Storage).toBe(true)
	})

	it('sets and gets an item', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		expect(storage.getItem('foo')).toBe('bar')
	})

	it('sets a number to a string', () => {
		const storage = new Storage()
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		storage.setItem('foo', 42 as any)
		expect(storage.getItem('foo')).toBe('42')
	})

	it('removes an item', () => {
		const storage = new Storage()
		storage.setItem('foo', 'bar')
		storage.removeItem('foo')
		expect(storage.getItem('foo')).toBeUndefined()
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
})
