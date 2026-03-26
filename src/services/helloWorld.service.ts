import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HelloWorldService {
	private readonly _title: string = 'Hello, World!';

	public getTitle(): string {
		return this._title;
	}
}
