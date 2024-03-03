import * as React from "react";

interface UdemyDemoProps {
	children?: React.ReactNode;
}

/**
 * # UdemyDemo
 * Just a demo component.
 */
export function UdemyDemo({ children }: UdemyDemoProps) {
	return (
		<div>
			<h1 data-testid="udemy-demo-h1">Udemy Demo Component</h1>
			{children}
		</div>
	);
}
