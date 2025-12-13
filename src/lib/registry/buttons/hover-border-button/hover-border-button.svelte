<script lang="ts">
    type ButtonProps = {
        children: () => any;
        class?: string;
        role?: string; // component role
        duration?: number; // duration of animation cycle in ms
        clockwise?: boolean; // direction of gradient rotation
    }
    import {cn} from "$lib/utils"
    let {children, class: className, role="button", duration, clockwise = true, ...restProps}: ButtonProps = $props();

    type Direction = "TOP" || "LEFT" || "BOTTOM" || "RIGHT";
    let hovered = $state<boolean>(false)
    let direction: Direction[] = ["TOP", "RIGHT", "BOTTOM", "LEFT"];

    function rotateDirection(currentDirection: Direction): Direction {

    }
</script>

<div
	{role}
	class={cn('', className)}
	{...restProps}
	onmouseleave={() => (hovered = false)}
	onmouseenter={() => (hovered = true)}
>
	{children?.()}
</div>
