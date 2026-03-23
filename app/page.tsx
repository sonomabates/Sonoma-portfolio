export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
  Sonoma Bates
</p>

<h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
  Strategic communications for schools, founders, and health brands.
</h1>

<p className="mt-6 text-lg text-gray-600 max-w-2xl">
  I build content systems that clarify ideas, strengthen trust, and drive meaningful engagement—across social media, email, and long-form storytelling.
</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-8">Selected Work</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-medium">Social Media Content</h3>
            <p className="mt-3 text-gray-600">
              Campaigns, reels, carousels, and content systems designed to
              educate, engage, and convert.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-medium">Blog Writing</h3>
            <p className="mt-3 text-gray-600">
              Long-form writing that turns complex ideas into clear, compelling
              stories.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-medium">Newsletter Strategy</h3>
            <p className="mt-3 text-gray-600">
              Email content that informs, nurtures, and strengthens audience
              connection.
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-medium">Case Studies</h3>
            <p className="mt-3 text-gray-600">
              A closer look at how strategy, messaging, and execution come
              together across channels.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-8">About</h2>
        <p className="text-gray-600 max-w-3xl leading-8">
          My work sits at the intersection of editorial thinking, strategic
          communication, and audience engagement. I’ve developed content across
          social, email, web, and long-form formats for education and wellness
          organizations that need both clarity and voice.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-8">Contact</h2>
        <p className="text-gray-600">your@email.com</p>
      </section>
    </main>
  );
}