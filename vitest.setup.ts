import { vi } from 'vitest';

if (!Element.prototype.animate) {
  Element.prototype.animate = vi.fn(() => ({
    finished: Promise.resolve(),
    cancel: vi.fn(),
    play: vi.fn(),
    pause: vi.fn(),
    reverse: vi.fn(),
    updatePlaybackRate: vi.fn(),
  })) as any;
}
