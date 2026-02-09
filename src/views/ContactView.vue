<template>
  <div class="min-h-screen bg-[#CAF0F8] flex flex-col items-center justify-center p-4">
    <form class="w-full max-w-[500px] bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl font-black text-center text-white">Contact</h2>
        
        <div class="flex flex-col gap-1">
          <label for="email" class="text-sm font-semibold text-gray-300">Your email address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            required
            class="block w-full rounded-md border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="subject" class="text-sm font-semibold text-gray-300">Subject</label>
          <input
            type="text"
            id="subject"
            required
            class="block w-full rounded-md border-gray-600 bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="message" class="text-sm font-semibold text-gray-300">Forklaring</label>
          <textarea
            id="message"
            rows="4"
            class="block w-full rounded-md border-gray-600 bg-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
          ></textarea>
        </div>

        <div class="flex flex-col gap-1">
          <label for="file" class="text-sm font-semibold text-gray-300">Attachments</label>
          <input
            type="file"
            id="file"
            class="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          class="mt-4 rounded-md bg-indigo-600 px-6 py-2.5 self-start text-sm font-bold text-white hover:bg-indigo-500 transition-all shadow-lg active:scale-95"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>