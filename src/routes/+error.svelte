<script lang="ts">
    export let error;
    let status = error?.status;

    import Button from "../components/Button.svelte";
    import Heading from "../components/Heading.svelte";
    import Container from '../components/Container.svelte';
</script>

<Container>
  
    <Heading text={status}Jejda />

    <Heading text={error?.message || 'Něco se pokazilo...'} />
   <Button href="/" text="Domů" />

</Container>
