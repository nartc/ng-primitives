/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the CC BY-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InjectionToken, inject } from '@angular/core';
import type { NgpFocusTrap } from './focus-trap.directive';

export const NgpFocusTrapToken = new InjectionToken<NgpFocusTrap>('NgpFocusTrapToken');

/**
 * Inject the FocusTrap directive instance
 */
export function injectFocusTrap(): NgpFocusTrap {
  return inject(NgpFocusTrapToken);
}
