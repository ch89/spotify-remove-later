<script setup>
	import { ref } from "vue"
	import Song from "../components/Song.vue"
	import { useStore } from "vuex"

	const store = useStore()
</script>

<template>
	<div class="overflow-auto scrollbar-hide">
		<header class="p-6 flex items-center sticky top-0 z-10 bg-[#121212]/50 backdrop-blur-sm">
			<button class="bg-black w-12 h-12 rounded-full mr-2">
				<i class="fas fa-angle-left"></i>
			</button>
			<button class="bg-black w-12 h-12 rounded-full">
				<i class="fas fa-angle-right"></i>
			</button>
			<button class="bg-[#282828] flex items-center gap-4 p-4 rounded-full ml-auto">
				<img src="/images/ch.png" alt="Avatar" class="avatar">
				<p class="text-sm font-bold">Christian</p>
				<i class="fas fa-caret-down"></i>
			</button>
		</header>
		<div class="grid grid-cols-6 gap-6 p-6">
			<song v-for="song in store.state.songs" :key="song.id" :song="song"></song>
		</div>
	</div>
</template>