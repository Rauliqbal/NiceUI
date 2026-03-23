export const alertVariants = [
  {
    name: 'Basic Alert',
    description: 'Notifikasi dasar dengan judul dan deskripsi ',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<div class="p-4 rounded-xl bg-gray-10 border border-gray-200 dark:bg-gray-800 dark:border-gray-600">
   <div>
    <h4 class="text-gray-800 dark:text-gray-200 font-medium">Heads up!</h4>
    <p class="text-gray-700 dark:text-gray-300 text-sm">This is an informational alert message.</p>
  </div>
</div>`
  },
  {
    name: 'Success Alert',
    description: 'Notifikasi berhasil dengan icon, judul dan deskripsi ',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<div class="p-4 rounded-xl bg-green-50 border border-green-200 dark:bg-green-900/30 dark:border-green-800">
  <div class="flex items-start gap-3">
    <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
   <div>
    <h4 class="text-green-800 dark:text-green-200 font-medium">Success!</h4>
    <p class="text-green-700 dark:text-green-300 text-sm">Your profile information has been saved.</p>
   </div>
  </div>
</div>`
  },
   {
    name: 'Warning Alert',
    description: 'Notifikasi Informasi dengan icon, judul dan deskripsi ',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<div class="p-4 rounded-xl bg-yellow-50 border border-yellow-200 dark:bg-yellow-900 dark:border-yellow-600">
   <div class="flex items-start gap-3">
    <svg class="w-5 h-5 text-yellow-500 dark:text-yellow-400" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 16v-4m0-4h.01"/>
    </svg>
   <div>
    <h4 class="text-yellow-600 dark:text-yellow-200 font-medium">Username field is empty!</h4>
    <p class="text-yellow-500 dark:text-yellow-400 text-sm">Please enter your username.</p>
   </div>
  </div>
</div>`
  },
  {
    name: 'Error Alert',
    description: 'Notifikasi error dengan icon, judul dan deskripsi ',
    author: 'Rauliqbal',
    github: 'https://github.com/Rauliqbal',
    code: `<div class="p-4 rounded-xl bg-red-100 border border-red-200 dark:bg-red-900 dark:border-red-600">
   <div class="flex items-start gap-3">
    <svg class="w-5 h-5 text-red-600 dark:text-red-400" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M15 9l-6 6m0-6l6 6"/>
    </svg>
   <div>
    <h4 class="text-red-600 dark:text-red-200 font-medium">Failed!</h4>
    <p class="text-red-500 dark:text-red-300 text-sm">Unable to update your profile.</p>
   </div>
  </div>
</div>`
  },
 
]