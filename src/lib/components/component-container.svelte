<script lang="ts">
    import { children } = $props();
</script>

<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
	<div class="relative flex min-h-[400px] items-center justify-center">
		{@render children?.()}
	</div>
</div>
