import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'ctf-link',
	imports: [RouterLink],
	templateUrl: './link.component.html',
	styleUrl: './link.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Link {
	public readonly navigateTo: InputSignal<string> = input.required<string>();
	public readonly text: InputSignal<string> = input.required<string>();

	public readonly ariaLabel: InputSignal<string | undefined> = input<string | undefined>();
}
