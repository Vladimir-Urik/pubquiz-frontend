<script lang="ts">
    import Button from "../components/Button.svelte";
    import Logo from "../components/Logo.svelte";
    import Heading from "../components/Heading.svelte";
</script>

<div class="bg-secondary w-full h-screen flex flex-col justify-center items-center">
    <Logo />
    <Heading text="how\nchronically online\nare you?" />
    <Button href="/login" text="Hrát!" />
</div>