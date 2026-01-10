import type { Action } from "svelte/action";
import { animate, type AnimationOptions } from "motion";

export type CountAnimationOptions = AnimationOptions & {
    to: Number,
    onUpdate?: (latest: string) => void
}

export const countanimation: Action = (node: HTMLElement, data: CountAnimationOptions = { from: 0, to: 100, duration: 2 }) => {

    const x = data.from;
    const y = data.to;
    
    $effect(() => {
        const animation = animate(x, y, {
            onUpdate: latest => node.innerHTML = `${Math.round(Number(latest))}`,
            ...data
        })

        return () => animation.stop();
    })
}