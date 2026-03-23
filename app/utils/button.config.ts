export const buttonVariants = [
  {
    name: 'Button Primary',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<button
   class="inline-flex rounded-lg bg-[#fdbf28] px-3 py-2 font-semibold text-white dark:text-[#0a0a0a] transition-all duration-200 hover:bg-[#e0ab25] active:scale-95 focus:ring-2 focus:ring-amber-200 focus:ring-offset-2"
>
   Button
</button>
    `
  },
  {
    name: 'Button Outline Primary',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<button
   class="inline-flex rounded-lg ring-2 ring-[#fdbf28] px-3 py-2 font-semibold text-[#fdbf28] transition-all duration-200 hover:bg-[#fdbf28] hover:text-white active:scale-95 focus:ring-2 focus:ring-amber-200 focus:ring-offset-2"
>
   Button
</button>`
  },
  {
    name: 'Button Secondary',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<button
   class="inline-flex rounded-lg bg-gray-600 px-3 py-2 font-semibold text-white transition-all duration-200 hover:bg-gray-600 active:scale-95 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
>
   Button
</button>`
  },
  {
    name: 'Button Outline Secondary',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<button
   class="inline-flex rounded-lg ring-2 ring-gray-600 px-3 py-2 font-semibold text-gray-600 transition-all duration-200 hover:bg-gray-600  hover:text-white active:scale-95 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
>
   Button
</button>`
  },
   {
    name: 'Button with Icon',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<button
   class="inline-flex gap-1 rounded-lg bg-[#fdbf28] px-3 py-2 font-semibold text-white transition-all duration-200 hover:bg-[#e0ab25] active:scale-95 active:ring-2 active:ring-amber-200 active:ring-offset-2"
>
   <svg class="h-5 w-5" viewBox="0 0 24 24">
      <g
         fill="none"
         stroke="currentColor"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
      >
         <path d="M2 21a8 8 0 0 1 13.292-6" />
         <circle cx="10" cy="8" r="5" />
         <path d="M19 16v6m3-3h-6" />
      </g>
   </svg>
   Add User
</button>
`
  },
  {
    name: 'Button Animation Text',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<button
   class="cursor-pointer bg-[#fdbf28] px-3 py-2 rounded-lg text-white font-semibold group hover:bg-[#e0ab25] focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 transtition-all duration-200"
>
   <div class="relative overflow-hidden">
      <p
         class="group-hover:-translate-y-7 duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]"
      >
         Button
      </p>
      <p
         class="absolute top-7 left-0 group-hover:top-0 duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]"
      >
         Button
      </p>
   </div>
</button>
`
  },
  {
    name: 'Button Animation Ripple',
    description: '',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<button
   class="bg-gray-600 font-semibold relative cursor-pointer py-2 px-3 inline-flex justify-center text-white rounded-lg focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all duration-200 group overflow-hidden"
>
   <span class="relative z-20">Button</span>

   <span
      class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/40 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
   ></span>
</button>

`
  },
]