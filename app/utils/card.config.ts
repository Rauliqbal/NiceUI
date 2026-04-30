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
  name: 'Card with Image & Badge Like and Views',
  description: 'A project card with image overlay, views badge, likes badge, description, and action button.',
  author: 'Rhein Sullivan',
  github: 'https://github.com/RheinSullivan',
  code: `
    <div class="group relative w-96 overflow-hidden rounded-xl bg-white shadow-md dark:bg-[#121212]">
      <figure class="relative h-[450px] w-full overflow-hidden">
        <img
          src="https://placehold.net/600x400.png"
          alt="Project Image"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      <div class="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black/90 dark:via-black/50 dark:to-transparent">
        <div class="absolute bottom-0 flex w-full flex-col p-5 text-gray-900 dark:text-white">
          <h3 class="mb-2 text-xl font-bold">Project Title</h3>

          <div class="flex flex-row flex-wrap items-center gap-3 text-sm">
            <span class="flex items-center gap-1.5 rounded-full border border-gray-300 bg-[#fdbf28]/30 px-2 py-[2px] text-gray-900 dark:border-white/20 dark:bg-[#fdbf28]/20 dark:text-white">
              <span>120</span>
              <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75A3.75 3.75 0 1 0 12 8.25a3.75 3.75 0 0 0 0 7.5Z" />
              </svg>
            </span>

            <span class="flex items-center gap-1.5 rounded-full border border-gray-300 bg-[#fdbf28]/30 px-2 py-[2px] text-gray-900 dark:border-white/20 dark:bg-[#fdbf28]/20 dark:text-white">
              <span>24</span>
              <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5A5.02 5.02 0 0 0 12 6.188A5.02 5.02 0 0 0 7.5 3.75C5.015 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </span>
          </div>

          <p class="my-4 text-xs leading-relaxed text-gray-600 dark:text-gray-300">
            This modern image card component includes hover animation, overlay gradient, views and likes badges.
          </p>

          <a
            href="/"
            class="w-full rounded-lg bg-[#fdbf28] py-2 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#e0ab25] focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 active:scale-95 dark:text-[#0a0a0a]"
          >
            View Project
          </a>
        </div>
      </div>
    </div>`
  },
  {
  name: 'Minimal Clean Card',
  description: 'Simple clean card with title, description and CTA.',
  author: 'Rhein Sullivan',
  github: 'https://github.com/RheinSullivan',
  code: `
    <div class="w-80 rounded-xl bg-white p-5 shadow-md transition hover:shadow-lg dark:bg-[#121212]">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Card Title</h2>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        A simple and clean card component suitable for dashboards and listings.
      </p>
      <div class="mt-4 flex justify-end">
        <button class="rounded-lg bg-[#fdbf28] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e0ab25] active:scale-95 dark:text-[#0a0a0a]">
          Action
        </button>
      </div>
    </div>`
  },
  {
  name: 'Horizontal Card',
  description: 'Card layout with image on left and content on right.',
  author: 'Rhein Sullivan',
  github: 'https://github.com/RheinSullivan',
  code: `
    <div class="flex w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg dark:bg-[#121212]">
      <img
        src="https://placehold.net/600x400.png"
        alt="Image"
        class="h-40 w-40 object-cover"
      />

      <div class="flex flex-col justify-between p-4">
        <div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
            Horizontal Card
          </h2>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            A flexible horizontal card layout ideal for blogs or product previews.
          </p>
        </div>

        <button class="mt-3 w-fit rounded-lg bg-[#fdbf28] px-3 py-1 text-sm font-semibold text-white transition hover:bg-[#e0ab25] active:scale-95 dark:text-[#0a0a0a]">
          Read More
        </button>
      </div>
    </div>`
  },
]