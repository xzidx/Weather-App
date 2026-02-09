<template>
  <div class="about-container w-full bg-[#CAF0F8] mt-20 mx-auto p-8 min-h-screen flex flex-col justify-center">
    
    <section class="relative py-20 bg-[#90E0EF] text-black text-center">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-5xl font-bold mb-4">Our Story</h1>
        <p class="text-xl opacity-90">Building the future of digital experiences with passion and precision.</p>
      </div>
    </section>

    <section class="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-semibold mb-4 text-blue-700">Who We Are</h2>
        <p class="text-lg leading-relaxed mb-4">
          Founded in 2026, we started with a simple idea: make technology feel more human. 
          We believe that great design isn't just about how it looks, but how it works for you.
        </p>
        <p class="text-lg leading-relaxed">
          Our team is a diverse group of creators, thinkers, and explorers dedicated to 
          pushing the boundaries of what's possible in the web ecosystem.
        </p>
      </div>
      <div class="bg-gray-200 rounded-2xl h-64 flex items-center justify-center text-gray-500 italic">
        

            <img
        src="@/assets/weather-map.png"
        alt="Weather Logo"
        class="h-96 w-auto max-w-6xl transition-transform shadow-lg"
      />

      </div>
    </section>

    <section class="bg-white py-16 shadow-inner flex flex-col justify-center items-center">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12">Our Core Values</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 border border-gray-100 rounded-lg shadow-sm">
            <div class="text-blue-500 text-3xl mb-3">🚀</div>
            <h3 class="font-bold text-xl mb-2">Innovation</h3>
            <p>We don't follow trends; we set them by constantly experimenting.</p>
          </div>
          <div class="p-6 border border-gray-100 rounded-lg shadow-sm">
            <div class="text-blue-500 text-3xl mb-3">🤝</div>
            <h3 class="font-bold text-xl mb-2">Integrity</h3>
            <p>Transparency and honesty are at the heart of everything we build.</p>
          </div>
          <div class="p-6 border border-gray-100 rounded-lg shadow-sm">
            <div class="text-blue-500 text-3xl mb-3">🌍</div>
            <h3 class="font-bold text-xl mb-2">Impact</h3>
            <p>Our goal is to create products that make a real difference globally.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Added a bit of smooth scrolling and cleanup */
.about-container {
  min-height: 100vh;
  line-height: 1.6;
}

h1, h2 {
  letter-spacing: -0.02em;
}

/* Fallback for responsiveness if not using a CSS framework */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>