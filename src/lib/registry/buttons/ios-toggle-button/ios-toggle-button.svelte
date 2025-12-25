<script lang="ts">
	import { cn } from "$lib/utils";

    let { class: className = "", children, ...restProps } = $props();
</script>

<div class={cn('flex items-center gap-3', className)} {...restProps}>
	<span class="text-sm font-medium pointer-events-none">{@render children?.()}</span>

	<label class="relative inline-flex items-center cursor-pointer">
		<input type="checkbox" class="sr-only peer" aria-label="Toggle Setting" />
		<span class="w-11 h-6 bg-neutral-300 rounded-full peer-checked:bg-green-400 transition"></span>
		<span
			class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"
		></span>
	</label>
</div>
