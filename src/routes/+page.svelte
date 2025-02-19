<script lang="ts">
    import ButtonLink from "../components/ButtonLink.svelte";
    import Logo from "../components/Logo.svelte";
    import Heading from "../components/Heading.svelte";
    import Container from '../components/Container.svelte';
	import Menu from "../components/Menu.svelte";
</script>

<Container>
    <Logo />
    <Heading text="how\nchronically online\nare you?" />
    <ButtonLink href="/login" text="Hrát!" />
</Container>