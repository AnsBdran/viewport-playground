<script lang="ts">
	let {
		options,
		value = $bindable('')
	}: { options: { label: string; value: string }[]; value: string } = $props();
</script>

<select class="vp-select" bind:value id="countries">
	<option selected>Choose a device</option>
	{#each options as option}
		<option value={option.value}>{option.label}</option>
	{/each}
</select>

<style>
	.vp-select {
		border: 1px solid #ccc;
		padding-inline: 0.5rem;
		padding-block: 0.25rem;
		border-radius: 6px;
		outline: none;
	}
	.vp-select:focus {
		border-color: #aaa;
	}
</style>
