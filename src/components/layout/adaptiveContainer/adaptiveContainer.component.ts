import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'ctf-adaptive-container',
	templateUrl: './adaptiveContainer.component.html',
	styleUrl: 'adaptiveContainer.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdaptiveContainer {}
