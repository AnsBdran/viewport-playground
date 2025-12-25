<script>
	let { value = $bindable(), ...rest } = $props();
</script>

<input {...rest} bind:value class="vp-input" />

<style>
	.vp-input {
		border: 1px solid #ccc;
		padding-inline: 0.5rem;
		padding-block: 0.25rem;
		border-radius: 6px;
		outline: none;
		box-sizing: border-box;
		font-family: sans-serif;
	}
	.vp-input:focus {
		border-color: #aaa;
	}
</style>
