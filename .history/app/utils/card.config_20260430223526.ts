export const cardVariants = [
  {
    name: 'Basic Card',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `
    <div class="w-96 overflow-hidden rounded-xl bg-white dark:bg-[#121212] shadow-md">
    <div class="p-4">
      <h2 class="text-xl font-medium">Card Title</h2>
      <p class="mt-1 text-gray-500 dark:text-gray-400">A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="mt-2 flex justify-end">
        <button class="inline-flex rounded-lg bg-[#fdbf28] px-3 py-2 font-semibold text-white transition-all duration-200 hover:bg-[#e0ab25] focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 active:scale-95 dark:text-[#0a0a0a]">Buy Now</button>
      </div>
    </div>
  </div>`
  },
  {
    name: 'Card with Image',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `
    <div class="w-96 overflow-hidden rounded-xl bg-white dark:bg-[#121212] shadow-md">
    <figure>
      <img src="https://placehold.net/600x400.png" alt="Shoes" />
    </figure>
    <div class="p-4">
      <h2 class="text-xl font-medium">Card Title</h2>
      <p class="mt-1 text-gray-500 dark:text-gray-400">A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="mt-2 flex justify-end">
        <button class="inline-flex rounded-lg bg-[#fdbf28] px-3 py-2 font-semibold text-white transition-all duration-200 hover:bg-[#e0ab25] focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 active:scale-95 dark:text-[#0a0a0a]">Buy Now</button>
      </div>
    </div>
  </div>`
  },
  {
    name: 'Card with Image Overlay',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `
    <div class="group relative w-96 overflow-hidden rounded-xl bg-white shadow-md dark:bg-[#121212]">
    <figure>
      <img src="https://placehold.net/600x400.png" alt="Shoes" />
    </figure>
    <div class="absolute inline-flex justify-end flex-col inset-0 bg-black/40 p-4 translate-y-100 group-hover:translate-0 transition-all duration-350 ease-out">
      <h2 class="text-xl font-medium text-white">Card Title</h2>
      <p class="mt-1 text-gray-300">A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="mt-2 flex justify-end">
        <button class="inline-flex rounded-lg bg-[#fdbf28] px-3 py-2 font-semibold text-white transition-all duration-200 hover:bg-[#e0ab25] focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 active:scale-95 dark:text-[#0a0a0a]">Buy Now</button>
      </div>
    </div>
  </div>`
  },
  {
    name: 'Card with Image & Badge',
    description: '',
    author: 'Rhein Sullivan',
    github: 'https://github.com/RheinSullivan/',
    code : `
     <div class="rounded-lg overflow-hidden relative bg-secondary backdrop-blur-sm">
      <div class="relative w-full h-[450px] group">
        <img src="https://placehold.net/600x400.png" alt="Project Image" class="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full" />
        <div class="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent">
          <div class="absolute bottom-0 p-5 text-white flex flex-col w-full">
            <h3 class="text-xl font-bold mb-2">Project Title</h3>
            <div class="flex flex-row flex-wrap items-center text-sm gap-4">
              <span class="flex items-center gap-1.5 bg-red/40 px-2 py-[2px] rounded-full border">
                <span>123</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-[11px]" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="11" height="11">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.
    `
  },
]