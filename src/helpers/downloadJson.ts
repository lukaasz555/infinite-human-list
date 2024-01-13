export function downloadJson(
	data: Record<string, unknown>,
	filename: string
): void {
	const jsonData = JSON.stringify(data, null, 2);
	const blob = new Blob([jsonData], { type: 'application/json' });

	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = filename;

	document.body.appendChild(link);
	link.click();

	document.body.removeChild(link);
}
