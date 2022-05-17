<script setup>
	import { useStore } from "vuex"
	import { ref, computed } from "vue"

	const store = useStore()

	let song = computed(() => store.state.songs[store.state.index])

	let paused = ref(true),
		progress = ref(0),
		duration = ref(0),
		loop = ref(false),
		muted = ref(false)

	let format = time => {
		let minutes = Math.floor(time / 60),
			seconds = Math.floor(time % 60).toString().padStart(2, "0")

		return `${minutes}:${seconds}`
	}
</script>

<template>
	<div class="bg-[#282828] col-span-2 grid grid-cols-3 p-6">
		<div class="flex items-center gap-4 text-[#B3B3B3]">
			<img :src="`/images/${song.name}.jpg`" alt="Song" class="w-12">
			<div>
				<h3 class="font-bold text-white">{{ song.title }}</h3>
				<p class="text-sm">{{ song.artist }}</p>
			</div>
			<button>
				<i class="fas fa-heart"></i>
			</button>
			<button>
				<i class="far fa-image"></i>
			</button>
		</div>
		<div class="text-[#B3B3B3]">
			<div class="flex items-center justify-center gap-4 mb-2">
				<button>
					<i class="fas fa-random"></i>
				</button>
				<button @click="store.commit('prev')">
					<i class="fas fa-step-backward"></i>
				</button>
				<button @click="paused ? $refs.audio.play() : $refs.audio.pause()">
					<i class="far text-4xl" :class="paused ? 'fa-play-circle' : 'fa-pause-circle'"></i>
				</button>
				<button @click="store.commit('next')">
					<i class="fas fa-step-forward"></i>
				</button>
				<button @click="loop = ! loop" :class="{ 'text-[#1DB954]': loop }">
					<i class="fas fa-redo-alt"></i>
				</button>
			</div>
			<div class="flex items-center gap-2">
				<div class="text-xs">{{ format(progress) }}</div>
				<input type="range" class="flex-1" v-model="progress" step="any" :max="duration" @change="$refs.audio.currentTime = progress">
				<div class="text-xs">{{ format(duration) }}</div>
			</div>
			<audio :src="`/songs/${song.name}.mp3`" @canplay="$event.target.play()" ref="audio" @play="paused = false" @pause="paused = true" @timeupdate="progress = $event.target.currentTime" @durationchange="duration = $event.target.duration" @ended="store.commit('next')" :loop="loop" :muted="muted"></audio>
		</div>
		<div class="flex items-center justify-end gap-4 text-[#B3B3B3]">
			<button>
				<i class="fas fa-list"></i>
			</button>
			<button>
				<i class="fas fa-tablet-alt"></i>
			</button>
			<button @click="muted = ! muted">
				<i class="fas fa-fw" :class="muted ? 'fa-volume-mute' : 'fa-volume-up'"></i>
			</button>
			<input type="range" step="any" max="1" @input="$refs.audio.volume = $event.target.value">
		</div>
	</div>
</template>