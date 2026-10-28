export default function ProjectsLoading() {
  return (
    <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
      <main className="pt-20 md:pt-24">
        <section className="bg-brand-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-16">
            <div className="h-4 w-24 bg-brand-softGray rounded mb-4 animate-pulse" />
            <div className="h-10 md:h-14 w-full max-w-xl bg-brand-softGray rounded mb-6 animate-pulse" />
            <div className="h-4 w-full max-w-2xl bg-brand-softGray rounded animate-pulse" />
          </div>
        </section>

        <section className="bg-brand-white border-y border-brand-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-wrap gap-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-brand-softGray rounded-full animate-pulse" />
            ))}
          </div>
        </section>

        <section className="py-24 md:py-32 bg-brand-softGray">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-brand-white border border-brand-border rounded-[10px] overflow-hidden">
                  <div className="aspect-[16/10] bg-brand-softGray animate-pulse" />
                  <div className="p-8 lg:p-10">
                    <div className="h-6 w-3/4 bg-brand-softGray rounded mb-3 animate-pulse" />
                    <div className="h-3 w-1/3 bg-brand-softGray rounded mb-6 animate-pulse" />
                    <div className="h-3 w-full bg-brand-softGray rounded mb-2 animate-pulse" />
                    <div className="h-3 w-5/6 bg-brand-softGray rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
