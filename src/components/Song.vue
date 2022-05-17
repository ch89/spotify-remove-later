<script setup>
	import { useStore } from "vuex"

	const store = useStore()

	defineProps(["song"])
</script>

<template>
	<div class="bg-[#282828] p-4 rounded-lg">
		<div class="relative mb-4">
			<img :src="`images/${song.name}.jpg`" alt="Song">
			<button @click="store.commit('play', song)" class="bg-[#1DB954] w-10 h-10 rounded-full absolute bottom-2 right-2">
				<i class="fas fa-play"></i>
			</button>
		</div>
		<h3 class="font-bold">{{ song.title }}</h3>
		<p class="text-sm text-[#B3B3B3]">{{ song.artist }}</p>
	</div>
</template>