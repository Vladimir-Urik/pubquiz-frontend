<script lang="ts">
    import Button from "../components/Button.svelte";
    import Logo from "../components/Logo.svelte";
    import Heading from "../components/Heading.svelte";
    import Container from '../components/Container.svelte';
</script>

<Container>
    <Logo />
    <Heading text="how\nchronically online\nare you?" />
    <Button href="/login" text="Hrát!" />
</Container>