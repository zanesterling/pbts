// --- Types --- //
interface Generator<T> {
	sample(): T;
}

type Property = <Inputs>(values: Inputs) => bool;


// --- Macros --- //

let numSamples = 100;

export function property(title: string, checker: () => void) {
	console.log("checking that", title, "...");
	checker();
}

export function forall(generators, property: Property) {
	const results = [];
	for (let i = 0; i < numSamples; i++) {
		const values = {};
		for (const key of Object.keys(generators)) {
			values[key] = generators[key].sample();
		}
		const result = property(values);
		results.push(result);
		if (!result) {
			console.log(results.map(charFromResult).join(''));
			console.log('property failed at: ', values);
			return;
		}
	}
	console.log(results.map(charFromResult).join(''));
}

function charFromResult(result: bool): string {
	return result ? '.' : '!';
}


// --- Generators --- //

export const integer: Generator<number> = {
	sample(): number {
		const oneToOne = Math.random() * 2 - 1;
		return Math.floor(oneToOne * Number.MAX_SAFE_INTEGER);
	}
};


// --- TEST ZONE --- //
// Over here we're just trying it out.

// Fails because of overflow :-)
property('addition and subtraction are inverse operations', () => {
	forall({x: integer, y: integer}, ({x, y}) => {
		return x - y + y === x;
	});
});
