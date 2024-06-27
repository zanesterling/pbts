# Log
## 2024-06-27

Reading about property-based testing on propertesting.com, and thinking about
how it would work in TypeScript. I'd like to try it out, but I don't really
want to go find + vet some library. So I'll try writing a little one in TS.

---

I put together some basics of properties and generators.
Some missing basic features of PropEr:
- generating samples in increasing order of complexity
	- I think this comes from the notion of size.
- trying to shrink the result to the minimum repro

Should be fun to tinker more with this.

