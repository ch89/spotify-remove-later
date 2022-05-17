import { createStore } from "vuex"

export default createStore({
	state() {
		return {
			songs: [
				{ id: 1, name: "song1", title: "Savage Love", artist: "Jason Derulo" },
				{ id: 2, name: "song2", title: "Love not war", artist: "Jason Derulo" },
				{ id: 3, name: "song3", title: "Want to want me", artist: "Jason Derulo" },
				{ id: 4, name: "song4", title: "Sweet & Sour", artist: "Jason Derulo" },
				{ id: 5, name: "song5", title: "What hurts the most", artist: "Cascada" },
				{ id: 6, name: "song6", title: "My happy ending", artist: "Avril Lavigne" },
				{ id: 7, name: "song7", title: "The sound of silence", artist: "Disturbed" },
				{ id: 8, name: "song8", title: "Nightmare", artist: "Avenged Sevenfold" },
				{ id: 9, name: "song9", title: "The black swan", artist: "Story of the year" },
				{ id: 10, name: "song10", title: "Feeling this", artist: "Blink 182" },
				{ id: 11, name: "song11", title: "Ready for Love", artist: "Cascada" },
				{ id: 12, name: "song12", title: "Endgame", artist: "Rise Against" },
			],
			index: 0
		}
	},
	mutations: {
		prev(state) {
			state.index ? state.index-- : state.index = state.songs.length - 1
		},
		next(state) {
			state.index == state.songs.length - 1 ? state.index = 0 : state.index++
		},
		play(state, song) {
			state.index = state.songs.indexOf(song)
		}
	}
})