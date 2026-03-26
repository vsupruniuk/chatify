import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HelloWorldTitle } from '@containers';

@Component({
	selector: 'ctf-hello-world',
	imports: [HelloWorldTitle],
	templateUrl: './helloWorld.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldPage {}
