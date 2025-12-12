<script lang="ts" module>
	import {
		a,
		blockquote,
		code,
		em,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		li,
		ol,
		p,
		span,
		strong,
		ul,
		img,
		table,
		th,
		tr,
		td,
		thead,
		tbody
	} from '$lib/components/custom';
	export {
		a,
		blockquote,
		code,
		em,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		li,
		ul,
		ol,
		p,
		span,
		strong,
		img,
		table,
		th,
		tr,
		td,
		thead,
		tbody
	};
</script>

<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children?.()}
</div>
