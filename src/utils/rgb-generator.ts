export default function randomRGB(): number[] {
	let rgb = [];

	for (let i = 0; i < 3; i++) {
		const random = +Math.random().toFixed(2);
		rgb.push(Math.round(random * 255));
	}

	return rgb;
}
