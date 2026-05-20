export declare namespace TestingTypes {
	interface IComponentStubs {
		stubs: Type<unknown>[];
		realImports: Type<unknown>[];
	}

	interface IAngularComponentDefinition {
		selectors: string[][];
		dependencies?: Type<unknown>[];
	}
}
