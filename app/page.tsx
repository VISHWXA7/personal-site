export default function Home() {
  return (
    <main className="pt-16">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                Hi, I'm <span className="text-blue-600">Vishwaa</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                I build digital experiences that matter. Passionate about creating 
                innovative solutions through code.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
