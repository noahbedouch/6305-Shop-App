<script lang=ts>
	import { goto } from '$app/navigation';
	import { signIn } from '../firebase';
	let email = '';
	let password = '';
	function submit() {
		const user = signIn(email, password);
		if (user !== undefined) {
			goto('./');
		}
	}
</script>

<div class="">
	<h1 class="text-main font-sans text-6xl text-center mt-16 mb-32">Sign In</h1>
	<form on:submit={submit} class="text-center flex flex-col md:mx-16" onsubmit="return false;">
		<label for="email" class="sr-only">Email</label>
		<input
			id="email"
			name="email"
			type="email"
			placeholder="Enter your Email"
			class="md:mx-auto md:w-1/3 mx-16 px-2 py-4 mb-10 rounded dark:bg-background-accent-dark dark:text-white border-2 dark:border-none"
			bind:value={email}
		/>
		<label for="password" class="sr-only">Password</label>
		<input
			id="password"
			name="password"
			type="password"
			placeholder="Enter your password"
			class="md:mx-auto md:w-1/3 mx-16 px-2 py-4 mb-10 rounded dark:bg-background-accent-dark dark:text-white border-2 dark:border-none"
			bind:value={password}
		/>
		<button
			type="submit"
			class="md:mx-auto md:w-1/3 bg-main text-main-text mx-16 py-4 rounded hover:bg-accent hover:brightness-95 active:brightness-90"
			>Sign in</button
		>
	</form>
</div>
