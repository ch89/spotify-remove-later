<script setup>
	import Navbar from "./components/Navbar.vue"
	import Playbar from "./components/Playbar.vue"
</script>

<template>
	<main class="h-screen grid grid-cols-[1fr_5fr] grid-rows-[1fr] text-white">
		<navbar></navbar>
		<router-view class="bg-[#121212]"></router-view>
		<playbar></playbar>
	</main>
</template>

<style>
	.avatar {
		@apply w-12 h-12 rounded-full object-cover;
	}
</style>