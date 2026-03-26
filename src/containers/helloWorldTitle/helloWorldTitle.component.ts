import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnInit,
	signal,
	WritableSignal,
} from '@angular/core';

import { HelloWorldService } from '@services';

@Component({
	selector: 'ctf-hello-world-title',
	templateUrl: './helloWorldTitle.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldTitle implements OnInit {
	private readonly _helloWorldService: HelloWorldService = inject(HelloWorldService);

	protected readonly title: WritableSignal<string> = signal<string>('');

	public ngOnInit(): void {
		this.title.set(this._helloWorldService.getTitle());
	}
}
