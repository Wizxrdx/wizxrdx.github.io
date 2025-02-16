<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{ titles: string[] }>()

const titleIndex = ref(0)
const displayedText = ref('')
const typingSpeed = 100 // Typing speed (ms per letter)
const deletingSpeed = 50 // Deleting speed (ms per letter)
const pauseTime = 1000 // Pause time before deleting (ms)

const typeEffect = async () => {
    while (true) {
        const currentTitle = props.titles[titleIndex.value]

        // Typing effect
        for (let i = 0; i <= currentTitle.length; i++) {
            displayedText.value = currentTitle.slice(0, i)
            await new Promise(resolve => setTimeout(resolve, typingSpeed))
        }

        // Wait before deleting
        await new Promise(resolve => setTimeout(resolve, pauseTime))

        // Deleting effect
        for (let i = currentTitle.length; i >= 0; i--) {
            displayedText.value = currentTitle.slice(0, i)
            await new Promise(resolve => setTimeout(resolve, deletingSpeed))
        }

        // Move to next title
        titleIndex.value = (titleIndex.value + 1) % props.titles.length
    }
}

onMounted(() => {
    typeEffect()
})
</script>

<template>
    <p>
        {{ displayedText }}<span class="cursor">|</span>
    </p>
</template>

<style scoped>
p {
    color: #888;
    font-size: 1.2rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
}

/* Blinking Cursor Effect */
.cursor {
    display: inline-block;
    animation: blink 0.7s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
</style>
