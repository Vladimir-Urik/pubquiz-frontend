<script lang="ts">
    import Container from "../../components/Container.svelte";
    import Input from "../../components/Input.svelte";
    import Button from "../../components/Button.svelte";
    import Heading from "../../components/Heading.svelte";

    let username = "";
    let password = "";
</script>

<Container className="bg-secondary w-full h-screen flex flex-col justify-start items-center">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XVY-C6lowF0BWYmoqrT4eRPpeaMogPLTTQ&s" alt="" class="mb-10">
    <Heading text="login" />
    <form action="" class="w-full">
        <div class="w-full flex flex-col items-center">
            <div class="w-[70%] flex flex-col gap-3 mb-5">
                <Input type="text" placeholder="Jméno" bind:value={username} />
                <Input type="password" placeholder="Heslo" bind:value={password} />
                <div class="w-full flex flex-row justify-end">
                    <p class="text-white justify-end">Nemáš účet? <a href="/register" class="underline decoration-2 decoration-primary underline-offset-2">Klikni zde.</a></p>
                </div>    
            </div>
            <img src="images/icespice.png" alt="" class="w-[70%]">
        </div>
    </form>
    <Button href="/" text="Ready!" />
</Container>