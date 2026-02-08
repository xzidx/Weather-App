<template>
  <br /><br /><br /><br />
  <form class="max-w flex justify-center p-4">
    <div class="flex flex-col gap-2 w-[500px]">
      <p class="text-3xl font-black text-center">Contact</p>
      <label for="email" class="text-sm font-semibold text-gray-700"> Your email address </label>

      <input
        type="email"
        id="email"
        placeholder="you@example.com"
        required
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
      />

      <label for="email" class="text-sm font-semibold text-gray-700"> Subject </label>

      <input
        type="email"
        id="email"
        required
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
      />

      <label for="email" class="text-sm font-semibold text-gray-700"> Forklaring </label>

      <textarea
        name=""
        id=""
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
      >
      </textarea>

      <label for="email" class="text-sm font-semibold text-gray-700"> Attachments </label>

      <input
        type="email"
        id="email"
        placeholder="Add file or drop files here"
        required
        class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2.5 border"
      />

      <button
        type="submit"
        class="mt-4 rounded-md bg-indigo-600 px-4 py-2 self-start text-sm font-white text-white hover:bg-indigo-700 transition-colors"
      >
        Submit
      </button>
    </div>
  </form>
</template>
