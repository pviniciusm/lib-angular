import "jest-preset-angular/setup-env/zone";
import "zone.js"; // needed for Angular TestBed
import "zone.js/testing";

// Source - https://stackoverflow.com/a
// Posted by Deian, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-21, License - CC BY-SA 4.0

import { TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
