import { describe, vi, it, expect, beforeEach, afterEach } from 'vitest';
import CopyButton from './copy-button.svelte';
import { screen, render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { tick } from "svelte"

const mockText = "Hello World";
const clipboard = {
    writeText: vi.fn(),
    readText: vi.fn()
}
Object.defineProperty(globalThis.navigator, 'clipboard', {
    value: clipboard,
    writable: true
})

describe('copy-button', () => {
    beforeEach(() => {
        vi.useFakeTimers();
        clipboard.writeText.mockClear();

        render(CopyButton, {
            content: mockText
        });
    });

    afterEach(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();

        document.body.innerHTML = "";
    });

    it('should render successfully', () => {
        const button = screen.getByTestId('copy-button');
        expect(button).toBeTruthy();
    })

    it('should render as a button element', () => {
        const button = screen.getByTestId('copy-button');
        expect(button.tagName).toBe('BUTTON');
    });

    it('should not copy text on initial render', () => {
        const button = screen.getByTestId('copy-button');
        expect(navigator.clipboard.writeText).not.toHaveBeenCalled();
    });

    it('should copy text on click', async () => {
        const button = screen.getByTestId('copy-button');

        button.click();

        expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockText);
    });

    it('should copy text and become disabled', async () => {
        const button = screen.getByTestId('copy-button');

        button.click();
        await tick();

        expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockText);
        expect(button).toBeDisabled();
    })

    it('should re-enable after 2 seconds', async () => {
        const button = screen.getByTestId('copy-button');

        button.click();
        await tick();
        expect(button).toBeDisabled();

        // advance timeout
        vi.advanceTimersByTime(2000);
        await tick();
        expect(button).not.toBeDisabled();
    });

    it('should copy text again on multiple clicks', async () => {
        const button = screen.getByTestId('copy-button');

        // First click
        button.click();
        await tick();
        expect(button).toBeDisabled();
        expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
        expect(navigator.clipboard.writeText).toHaveBeenLastCalledWith(mockText);


        vi.advanceTimersByTime(2000);
        await tick();
        expect(button).not.toBeDisabled();

        button.click();
        expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(2);
        expect(navigator.clipboard.writeText).toHaveBeenLastCalledWith(mockText);
        await tick();
        expect(button).toBeDisabled();

        vi.advanceTimersByTime(2000);
        await tick();
        expect(button).not.toBeDisabled();
    });
});
