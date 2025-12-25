<script lang="ts" module>
	import { cn, type WithElementRef } from '$lib/utils';

	export type GlareHoverProps = WithElementRef<HTMLDivElement> & {
		glareColor?: string;
		glareOpacity?: number;
		glareAngle?: number;
		glareSize?: number;
		transitionDuration?: number;
		playOnce?: boolean;
		width?: string;
		height?: string;
		background?: string;
		borderRadius?: string;
		borderColor?: string;
		class?: string;
        style?: Record<string, string>;
		children?: () => any;
	};
</script>

<script lang="ts">
	let {
		class: className = '',
		children,
		transitionDuration = 650,
		glareSize = 250,
		glareAngle = -45,
		glareOpacity = 0.5,
		glareColor = '#ffffff',
		borderColor = "#333",
		borderRadius = "10px",
		background = "#000",
		height = "500px",
		width = "500px",
		playOnce = false,
        style,
		...restProps
	}: GlareHoverProps = $props();

    const hex = glareColor.replace("#", "");
    let rgba = glareColor;
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
        const r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
        const g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
        const b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    }

    const vars = {
        '--gh-width': width,
        '--gh-height': height,
        '--gh-background': background,
        '--gh-br': borderRadius,
        '--gh-angle': `${glareAngle}deg`,
        '--gh-duration': `${transitionDuration}ms`,
        '--gh-glare-size': `${glareSize}%`,
        '--gh-rgba': rgba,
        '--gh-border-color': borderColor,
    }
</script>

<div
	class={cn('glare-hover', playOnce ? 'glare-hover-play-once' : '', className)}
	style={{ ...vars, ...style }}
	{...restProps as any}
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
    .glare-hover {
        width: var(--gh-width);
        height: var(--gh-height);
        background: var(--gh-background);
        border-radius: var(--gh-br);
        border: 1px solid var(--gh-border-color);
        overflow: hidden;
        position: relative;
        display: grid;
        place-items: center;
    }

    .glare-hover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        var(--gh-angle),
        hsla(0, 0%, 0%, 0) 60%,
        var(--gh-rgba) 70%,
        hsla(0, 0%, 0%, 0),
        hsla(0, 0%, 0%, 0) 100%
    );
    transition: var(--gh-duration) ease;
    background-size:
        var(--gh-size) var(--gh-size),
        100% 100%;
    background-repeat: no-repeat;
    background-position:
        -100% -100%,
        0 0;
    }

    .glare-hover:hover {
        cursor: pointer;
    }

    .glare-hover:hover::before {
    background-position:
        100% 100%,
        0 0;
    }

    .glare-hover-play-once::before {
    transition: none;
    }

    .glare-hover-play-once:hover::before {
    transition: var(--gh-duration) ease;
    background-position:
        100% 100%,
        0 0;
    }

</style>
