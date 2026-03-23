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
]