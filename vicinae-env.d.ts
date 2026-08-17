/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Inhibit - Prevent the display from sleeping (idle inhibit / caffeinate -d) */
	"prevent-display": boolean;

	/** Inhibit - Prevent the system from sleeping (sleep inhibit / caffeinate -i) */
	"prevent-system": boolean;

	/** Inhibit - On Linux, also block sleep when the lid is closed. Ignored on macOS. */
	"prevent-lid": boolean;

	/** Inhibit - On macOS, prevent the disk from idle-sleeping (caffeinate -m). Ignored on Linux. */
	"prevent-disk": boolean;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Coffee */
	export type Coffee = ExtensionPreferences & {
		
	}

	/** Command: Caffeinate */
	export type Caffeinate = ExtensionPreferences & {
		
	}

	/** Command: Decaffeinate */
	export type Decaffeinate = ExtensionPreferences & {
		
	}

	/** Command: Toggle Caffeination */
	export type CaffeinateToggle = ExtensionPreferences & {
		
	}

	/** Command: Caffeinate For */
	export type CaffeinateFor = ExtensionPreferences & {
		
	}

	/** Command: Caffeinate Until */
	export type CaffeinateUntil = ExtensionPreferences & {
		
	}

	/** Command: Caffeinate While */
	export type CaffeinateWhile = ExtensionPreferences & {
		
	}

	/** Command: Schedule Caffeination */
	export type Schedule = ExtensionPreferences & {
		
	}

	/** Command: Caffeination Status */
	export type Status = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Coffee */
	export type Coffee = {
		
	}

	/** Command: Caffeinate */
	export type Caffeinate = {
		
	}

	/** Command: Decaffeinate */
	export type Decaffeinate = {
		
	}

	/** Command: Toggle Caffeination */
	export type CaffeinateToggle = {
		
	}

	/** Command: Caffeinate For */
	export type CaffeinateFor = {
		/** Duration (e.g. 45m, 1h30m) */
		"duration": string
	}

	/** Command: Caffeinate Until */
	export type CaffeinateUntil = {
		/** Time (e.g. 5pm, 17:30) */
		"time": string
	}

	/** Command: Caffeinate While */
	export type CaffeinateWhile = {
		
	}

	/** Command: Schedule Caffeination */
	export type Schedule = {
		
	}

	/** Command: Caffeination Status */
	export type Status = {
		
	}
}