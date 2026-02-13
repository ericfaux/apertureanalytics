import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">Aperture Analytics</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Features</a>
            <a href="#pricing" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Pricing</a>
            <a href="#demo" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm font-medium transition-colors">
              Request Demo
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded px-3 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span className="text-blue-400 text-xs font-medium tracking-wide uppercase">White-Label Reporting</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Client reports that actually impress
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Stop wasting hours in spreadsheets. Generate professional, white-labeled client reports in minutes—with your branding, your data, zero busywork.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#demo" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded font-medium transition-colors text-center text-sm">
                  See It In Action
                </a>
                <a href="#features" className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white px-7 py-3.5 rounded font-medium transition-colors text-center text-sm">
                  Learn More
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>5-minute setup</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-500 text-xs font-medium uppercase tracking-wide">Total Revenue</span>
                      <span className="text-emerald-400 text-xs font-semibold">↑ 23%</span>
                    </div>
                    <div className="text-3xl font-bold text-white tracking-tight">$284,392</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Clients</div>
                      <div className="text-2xl font-bold text-white">47</div>
                    </div>
                    <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">Reports</div>
                      <div className="text-2xl font-bold text-white">142</div>
                    </div>
                  </div>
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-3.5">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Your Logo, Your Branding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Everything You Need</h2>
            <p className="text-lg text-slate-400">Built for agencies who value their time</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: "Your Brand, Front & Center",
                description: "Every report carries your logo, colors, and custom domain. Clients see you, not us."
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Generate in Under 60 Seconds",
                description: "Connect your data sources once. Generate comprehensive reports instantly."
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "50+ Data Sources",
                description: "Google Analytics, Facebook Ads, Google Ads, CRM—pull from everywhere automatically."
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: "Professional Templates",
                description: "Start with proven templates for SEO, PPC, social, and more. Or build custom."
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Automated Scheduling",
                description: "Set it once. Monthly reports delivered to clients automatically on schedule."
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Client Portal Access",
                description: "Give clients 24/7 access to live dashboards under your domain. Zero logins."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-12">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Hours Saved/Month</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$800+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Cost Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Simple Pricing</h2>
            <p className="text-lg text-slate-400">No hidden fees. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "99",
                description: "Perfect for small agencies",
                features: [
                  "Up to 10 clients",
                  "50 reports/month",
                  "5 data integrations",
                  "Basic templates",
                  "Email support"
                ]
              },
              {
                name: "Professional",
                price: "249",
                description: "For growing agencies",
                features: [
                  "Up to 50 clients",
                  "Unlimited reports",
                  "20 data integrations",
                  "Premium templates",
                  "Priority support",
                  "Custom branding",
                  "Client portal"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "499",
                description: "For established agencies",
                features: [
                  "Unlimited clients",
                  "Unlimited reports",
                  "All integrations",
                  "Custom templates",
                  "Dedicated support",
                  "White-label everything",
                  "API access",
                  "SSO & security"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-slate-900 border ${plan.popular ? 'border-blue-600 ring-1 ring-blue-600/20' : 'border-slate-800'} rounded-lg p-8 relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-slate-500 text-sm">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#demo" className={`block w-full py-3 rounded font-semibold text-center transition-colors text-sm ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Ready to Impress Your Clients?</h2>
          <p className="text-lg text-slate-400 mb-8">
            Join agencies who've reclaimed their time and elevated their reporting.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-5 py-3.5 rounded bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded font-medium transition-colors whitespace-nowrap text-sm"
            >
              Request Demo
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">Aperture Analytics</span>
              </div>
              <p className="text-sm text-slate-500">
                White-label reporting for agencies.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Request Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 mt-12 pt-8 text-center text-xs text-slate-500">
            © 2026 Aperture Analytics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
