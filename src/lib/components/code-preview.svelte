<script lang="ts">
    let {children} = $props();
</script>

<div class="w-full min-h-56 border border-border flex justify-center items-center rounded-md p-4">
	{@render children?.()}
</div>
