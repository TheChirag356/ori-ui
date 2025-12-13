<script lang="ts">
    type MarqueeProps = {
        class?: string;
        reverse: boolean;
        pauseOnHover: boolean;
        vertical: boolean;
        children: () => any;
        repeat: number;
    }

    let {class: className, reverse = false, pauseOnHover = false, vertical = false, children, repeat = 4, ...restProps}: MarqueeProps = $props();
</script>

<div></div>
