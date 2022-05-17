<script setup>
	import { ref, computed } from "vue"
	import { useStore } from "vuex"

	const store = useStore()

	let song = computed(() => store.state.songs[store.state.index])

	const links = ref([
		{ icon: "fas fa-home", title: "Home", path: "/" },
		{ icon: "fas fa-search", title: "Search", path: "/search" },
		{ icon: "fas fa-book", title: "Your Library", path: "/library" },
		{ icon: "fas fa-heart", title: "Liked Songs", path: "/favorites" },
	])
</script>

<template>
	<div class="bg-black flex flex-col">
		<div class="p-6">
			<img src="/images/logo.png" alt="Logo" class="w-36 mb-6">
			<router-link :to="link.path" v-for="link in links" class="flex items-center gap-4 px-4 py-2 rounded-lg text-[#B3B3B3] hover:text-white transition">
				<i class="fa-fw text-lg" :class="link.icon"></i>
				<span class="text-sm font-bold">{{ link.title }}</span>
			</router-link>
		</div>
		<img :src="`/images/${song.name}.jpg`" alt="Song" class="mt-auto">
	</div>
</template>

<style scoped>
	.router-link-exact-active {
		@apply bg-[#282828] text-white;
	}
</style>