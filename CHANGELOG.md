# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.4.0](https://github.com/ng-web-apis/audio/compare/v1.3.4...v1.4.0) (2020-11-30)


### Features

* **polyfill:** add `AnalyserNode.prototype.getFloatTimeDomainData` polyfill for Safari ([f115354](https://github.com/ng-web-apis/audio/commit/f115354))

### [1.3.4](https://github.com/ng-web-apis/audio/compare/v1.3.3...v1.3.4) (2020-11-27)


### Bug Fixes

* **polyfill:** change globalThis to global to support older Node.js ([f43f1ae](https://github.com/ng-web-apis/audio/commit/f43f1ae))

### [1.3.3](https://github.com/ng-web-apis/audio/compare/v1.3.2...v1.3.3) (2020-11-27)


### Bug Fixes

* **OscillatorNode:** fix wrong prototype chain in Safari ([#16](https://github.com/ng-web-apis/audio/issues/16)) ([802c847](https://github.com/ng-web-apis/audio/commit/802c847))

### [1.3.2](https://github.com/ng-web-apis/audio/compare/v1.3.1...v1.3.2) (2020-11-26)


### Bug Fixes

* **polyfill:** fix wrong names for OscillatorNode and AudioBufferSourceNode classes in Safari ([8afae10](https://github.com/ng-web-apis/audio/commit/8afae10))

### [1.3.1](https://github.com/ng-web-apis/audio/compare/v1.3.0...v1.3.1) (2020-11-23)


### Bug Fixes

* **polyfill:** add `polyfill.js` to sideEffects so it is not dropped by production builds ([5de6152](https://github.com/ng-web-apis/audio/commit/5de6152))

## [1.3.0](https://github.com/ng-web-apis/audio/compare/v1.2.4...v1.3.0) (2020-09-30)

### Features

-   **analyser:** allow attributes to set `AnalyserOptions` in constructor ([acfde3f](https://github.com/ng-web-apis/audio/commit/acfde3f))

### [1.2.4](https://github.com/ng-web-apis/audio/compare/v1.2.3...v1.2.4) (2020-09-28)

### Bug Fixes

-   **analyzer:** fix `fftSize` and arrays length inconsistency ([901228f](https://github.com/ng-web-apis/audio/commit/901228f))

### [1.2.3](https://github.com/ng-web-apis/audio/compare/v1.2.2...v1.2.3) (2020-03-26)

### Bug Fixes

-   **destination:** fix `quiet` output and several other issues ([435f6b3](https://github.com/ng-web-apis/audio/commit/435f6b3))

### [1.2.2](https://github.com/ng-web-apis/audio/compare/v1.2.1...v1.2.2) (2020-02-14)

### Bug Fixes

-   **tokens:** rename `WEB_AUDIO_SUPPORTED` to `WEB_AUDIO_SUPPORT` _(Note: not considered breaking change since library is not publicly announced yet, such things will not happen in future)_ ([565fe16](https://github.com/ng-web-apis/audio/commit/565fe16))

### [1.2.1](https://github.com/ng-web-apis/audio/compare/v1.2.0...v1.2.1) (2020-02-11)

### Bug Fixes

-   **AudioParam:** correctly handle 0 when provided as default value ([bb32081](https://github.com/ng-web-apis/audio/commit/bb32081))

## [1.2.0](https://github.com/ng-web-apis/audio/compare/v1.1.0...v1.2.0) (2020-02-03)

### Features

-   **AudioParam:** support initial setting of AudioParam inputs through argument ([676f96e](https://github.com/ng-web-apis/audio/commit/676f96e))

## [1.1.0](https://github.com/ng-web-apis/audio/compare/v1.0.3...v1.1.0) (2020-01-29)

### Features

-   **tokens:** add `WEB_AUDIO_SUPPORTED` token ([cf2daa0](https://github.com/ng-web-apis/audio/commit/cf2daa0))

### [1.0.3](https://github.com/ng-web-apis/audio/compare/v1.0.1...v1.0.3) (2020-01-23)

### Bug Fixes

-   **AudioParam:** fix issues with non-positive ramping in Firefox ([2bfdfa2](https://github.com/ng-web-apis/audio/commit/2bfdfa2))

### [1.0.1](https://github.com/ng-web-apis/audio/compare/v1.0.0...v1.0.1) (2020-01-23)

### Bug Fixes

-   **AudioParam:** properly handle duration in multiple scheduled automations ([0b4518f](https://github.com/ng-web-apis/audio/commit/0b4518f))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
