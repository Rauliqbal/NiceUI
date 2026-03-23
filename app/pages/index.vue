<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <div class="fixed inset-0 noise-bg z-50"></div>

    <!-- Hero Section -->
    <section
      class="relative pt-48 pb-40 bg-[#F9F9F9] dark:bg-[#0A0A0A] text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-white/5">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] hero-glow pointer-events-none opacity-40">
      </div>
      <div class="container relative z-10 text-center">
        <div
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-zinc-800 dark:text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
          <Icon name="lucide:rocket" />
          V1.0.0 Now Live
        </div>

        <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-black dark:text-white">
          STUNNING UI.<br />
          <span class="text-primary">ZERO FRICTION.</span><br />
          INSTANT CODE.
        </h1>

        <p
          class="max-w-2xl mx-auto text-zinc-600 dark:text-gray-400 text-lg md:text-xl mb-12 font-medium leading-relaxed">
          Koleksi komponen Tailwind CSS premium yang didesain untuk kecepatan. Salin, tempel, dan selesai. Tidak perlu
          instalasi npm atau konfigurasi yang ribet.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink href="/components" id="hero-browse"
            class="w-full sm:w-auto px-10 py-4 bg-zinc-900 dark:bg-white dark:text-black text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-zinc-200 transition-all group shadow-xl shadow-zinc-200 dark:shadow-none">
            Browse Components
            <Icon name="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
          <NuxtLink to="https://github.com/Rauliqbal/NiceUI" target="_blank"
            class="w-full sm:w-auto px-10 py-4 bg-transparent border border-zinc-300 dark:border-white/10 text-zinc-900 dark:text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all">
            Give start
          </NuxtLink>
        </div>

        <!-- Floating Elements Simulation -->
        <div class="relative hidden lg:block">
          <div class="absolute -left-12 -top-56 float-anim">
            <div class="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl shadow-2xl w-72 text-left">
              <div class="flex gap-1.5 mb-4">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <code class="text-xs text-zinc-400 block leading-relaxed">
                                &lt;div class="<span class="text-primary">bg-zinc-900 p-8</span>"&gt;<br/>
                                &nbsp;&nbsp;&lt;h2 class="<span class="text-primary">text-2xl</span>"&gt;...&lt;/h2&gt;<br/>
                                &lt;/div&gt;
                            </code>
            </div>
          </div>
          <div class="absolute -right-12 -top-16 float-anim" style="animation-delay: -2s">
            <div
              class="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-5 rounded-2xl shadow-xl w-52 text-left">
              <div class="h-4 w-12 bg-zinc-100 dark:bg-zinc-700 rounded mb-4"></div>
              <div class="h-2 w-full bg-zinc-50 dark:bg-zinc-700/50 rounded mb-2.5"></div>
              <div class="h-2 w-2/3 bg-zinc-50 dark:bg-zinc-700/50 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Section -->
    <section id="features" class="py-32 bg-white dark:bg-[#0C0C0C] border-b border-zinc-100 dark:border-white/5">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="card">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon name="lucide:zap" size="24px" class="text-primary" />
            </div>
            <h3 class="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Super Fast Copy</h3>
            <p class="text-zinc-500 dark:text-gray-500 font-medium leading-relaxed">
              Cukup klik satu tombol untuk menyalin kode HTML murni dengan class Tailwind CSS. Langsung bekerja di
              project apapun.
            </p>
          </div>

          <div
            class="card">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon name="lucide:code" size="24px" class="text-primary" />

            </div>
            <h3 class="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Zero dependencies</h3>
            <p class="text-zinc-500 dark:text-gray-500 font-medium leading-relaxed">
              Tidak perlu npm, yarn, atau pnpm. Tidak ada library tambahan. Hanya Tailwind CSS standard yang Anda kenal.
            </p>
          </div>

          <div
            class="card">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon name="lucide:layout-template" size="24px" class="text-primary" />

            </div>
            <h3 class="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Modern Aesthetic</h3>
            <p class="text-zinc-500 dark:text-gray-500 font-medium leading-relaxed">
              Didesain dengan tren terbaru: minimalist, futuristic, dan brutalist. Siap meningkatkan level UI website
              Anda.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <section id="showcase" class="py-32 bg-white dark:bg-[#0A0A0A]">
      <div class="container">
        <div class="mb-20">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase text-zinc-900 dark:text-white">
            COMPONENT <span class="text-primary">VAULT</span></h2>
          <div class="w-24 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <!-- Large Card -->
          <div
            class="md:col-span-8 card overflow-hidden relative group">
            <div class="absolute top-0 right-0 p-8">
              <div class="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold">FEATURED</div>
            </div>
            <div class="max-w-md">
              <h3 class="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Dynamic Dashboard Sidebar</h3>
              <p class="text-zinc-500 dark:text-gray-500 mb-8">Sidebar minimalis dengan state hover dan active yang
                smooth. Mendukung mode gelap secara native.</p>
              <div class="flex gap-4">
                <span
                  class="px-3 py-1 bg-zinc-200 dark:bg-white/5 rounded-lg text-xs text-zinc-600 dark:text-gray-400">Responsive</span>
                <span
                  class="px-3 py-1 bg-zinc-200 dark:bg-white/5 rounded-lg text-xs text-zinc-600 dark:text-gray-400">Dark
                  Mode</span>
              </div>
            </div>
            <div
              class="mt-12 p-6 bg-white dark:bg-[#0A0A0A] border border-zinc-200 dark:border-white/10 rounded-2xl transform group-hover:translate-y-[-10px] transition-transform duration-500">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/10"></div>
                <div class="h-4 w-32 bg-zinc-100 dark:bg-white/10 rounded"></div>
              </div>
              <div class="space-y-4">
                <div class="h-12 w-full bg-primary/10 rounded-xl flex items-center px-4">
                  <div class="w-5 h-5 bg-primary rounded"></div>
                </div>
                <div class="h-12 w-full bg-zinc-100 dark:bg-white/5 rounded-xl"></div>
                <div class="h-12 w-full bg-zinc-100 dark:bg-white/5 rounded-xl"></div>
              </div>
            </div>
          </div>

          <!-- Vertical Card -->
          <div
            class="md:col-span-4 card flex flex-col justify-between group">
            <div>
              <h3 class="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">Pricing Cards</h3>
              <p class="text-zinc-500 dark:text-gray-500 text-sm">3 Layout variasi untuk SaaS pricing yang konversinya
                tinggi.</p>
            </div>
            <div class="my-12 flex justify-center">
              <div
                class="w-full aspect-square bg-linear-to-br from-primary/20 to-transparent rounded-full flex items-center justify-center">
                <Icon name="lucide:dollar-sign" class="text-6xl text-primary"/>
              </div>
            </div>
            <button
              class="w-full py-4 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-2xl font-bold hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all">
              View Template
            </button>
          </div>

          <!-- Square Cards -->
          <div
            class="md:col-span-4 card group">
            <div
              class="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="lucide:mouse-pointer-2" class="text-2xl text-zinc-900 dark:text-white"/>
            </div>
            <h3 class="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Interactive Buttons</h3>
            <p class="text-zinc-500 dark:text-gray-500 text-sm mb-6">20+ styles dari minimalis hingga futuristic glow
              effects.</p>
            <a href="#" id="btn-showcase-1"
              class="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-4">
              Explore Library
            </a>
          </div>

          <div
            class="md:col-span-4 card group">
            <div
              class="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="lucide:layout-grid" class="text-2xl text-zinc-900 dark:text-white"/>
            </div>
            <h3 class="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Grid Layouts</h3>
            <p class="text-zinc-500 dark:text-gray-500 text-sm mb-6">Bento grids, Masonry, dan Asymmetric layouts siap
              pakai.</p>
            <a href="#" id="btn-showcase-2"
              class="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-4">
              Explore Library
            </a>
          </div>

          <div
            class="md:col-span-4 card group">
            <div
              class="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icon name="lucide:form-input" class="text-2xl text-zinc-900 dark:text-white"/>
            </div>
            <h3 class="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Forms & Inputs</h3>
            <p class="text-zinc-500 dark:text-gray-500 text-sm mb-6">Input fields yang divalidasi dengan style modern
              minimalis.</p>
            <a href="#" id="btn-showcase-3"
              class="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all underline underline-offset-4">
              Explore Library
            </a>
          </div>
        </div>
      </div>
    </section>

     <!-- CTA Section -->
        <section id="community" class="py-32 bg-white dark:bg-[#0A0A0A]">
            <div class="max-w-5xl mx-auto px-6">
                <div class="bg-primary rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div class="relative z-10">
                        <h2 class="text-4xl md:text-6xl font-black text-black tracking-tight mb-8 uppercase">
                            JOIN THE <br/>FUTURE OF UI
                        </h2>
                        <p class="text-black/70 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto">
                            Bergabung dengan 100+ developer lainnya di grup kami. Dapatkan update komponen terbaru setiap minggunya!
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#" id="cta-join-group" class="w-full sm:w-auto px-10 py-5 bg-black text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all">
                                <Icon name="logos:whatsapp-icon" class="text-2xl"/>
                               Cooming soon...
                            </a>
                            <a href="#" id="cta-github" class="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-black/20 text-black font-bold rounded-2xl hover:bg-black/5 transition-all">
                                Star on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>
