import './styles.css'

function App() {

  return (
      <div className="flex flex-col h-screen">
          <header className="justify-center bg-zinc-950 text-zinc-400">
              <div className="max-w-xl lg:max-w-4xl mx-auto px-4 pt-12 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-48 text-center">
                  <div className="pt-7 mb-7 md:mb-16">
                      <h1 className="text-2xl md:text-4xl text-white font-bold">Welcome to Crispy&nbsp;Div</h1>
                      <p className="mt-2">A modular web development hub by <a className="underline hover:no-underline" href="https://seanchdavis.com/">Sean Davis</a>.</p>
                  </div>
                  <p className="relative text-white inline-block align-bottom">
                      <img src="images/crispy-div-logo-mark-zinc-bg.svg" className="w-9 h-9 mb-[-14px] bg-zinc-950 rounded-full" alt="Crispy Div Logo Mark"/>
                  </p>
              </div>
          </header>
          <div className="flex-grow-1 bg-white text-zinc-950">
              <section className="">
                  <div className="max-w-xl lg:max-w-4xl mx-auto px-4 py-24">
                      <div className="mb-10 md:mb-14 text-center">
                          <h1 className="text-xl md:text-2xl font-semibold">Modules In Focus</h1>
                          <p className="mt-2">Currently developing websites using the following technologies:</p>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12">
                          <div className="flex flex-col bg-zinc-950 overflow-hidden rounded-xl border-2 border-zinc-950">
                              <div className="text-white p-4 sm:px-6">
                                  <h3 className="text-xl font-bold"><a href="https://pm.crispydiv.com/" className="cursor-pointer">PageMotor</a></h3>
                              </div>
                              <div className="bg-white flex-grow-1 text-md px-4 sm:px-6 pt-4 sm:pt-6 pb-2 leading-6.5">
                                  <p><a href="https://pagemotor.com" className="text-zinc-950 underline hover:no-underline" target="_blank" rel="noopener noreferrer">PageMotor</a>, a modular PHP framework built by Chris Pearson, is designed for rapid development of high-performance web pages. Built on OOP architecture, it enables reusable components, precise asset control, and seamless content editing without reliance on page builders.</p>
                              </div>
                              <div className="bg-white text-sm px-4 pb-6 sm:pb-8 pt-3 sm:pt-3.5 sm:px-6">
                                  <a href="https://pm.crispydiv.com/" className="inline-block bg-zinc-950 border-2 border-zinc-950 text-white text-sm font-bold rounded-full px-4 py-2.5 hover:bg-white hover:text-zinc-950">Crispy Div via PageMotor</a>
                              </div>
                          </div>
                          <div className="flex flex-col bg-zinc-950 overflow-hidden rounded-xl border-2 border-zinc-950">
                              <div className="text-white p-4 sm:px-6">
                                  <h3 className="text-xl font-bold"><a href="https://wp.crispydiv.com/" className="cursor-pointer">WordPress</a></h3>
                              </div>
                              <div className="bg-white flex-grow-1 text-md px-4 sm:px-6 pt-4 sm:pt-6 pb-2 leading-6.5">
                                  <p><a href="https://wordpress.org" className="text-zinc-950 underline hover:no-underline" target="_blank" rel="noopener noreferrer">WordPress</a> is the legacy CMS powering much of the web. While it carries weight from years of plugins, patches, and page builders, it still holds its weight in content-driven workflows and client-friendly site management. It remains useful for rapid deployment.</p>
                              </div>
                              <div className="bg-white text-sm px-4 pb-6 sm:pb-8 pt-3 sm:pt-3.5 sm:px-6">
                                  <a href="https://wp.crispydiv.com/" className="inline-block bg-zinc-950 border-2 border-zinc-950 text-white text-sm font-bold rounded-full px-4 py-2.5 hover:bg-white hover:text-zinc-950">Crispy Div via WordPress</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
          <footer className="bg-zinc-950 text-zinc-400 py-8">
              <div className="max-w-xl lg:max-w-4xl mx-auto px-4 text-center">
                  <p className="text-sm">Copyright © {new Date().getFullYear()} Crispy Div &middot; All Rights Reserved.</p>
              </div>
          </footer>
      </div>
  )
}

export default App
