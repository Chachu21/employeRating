// components/home/HowItWorksSection.tsx
export default function HowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="max-w-[900px] mx-auto text-slate-500 md:text-xl dark:text-slate-400">
            Connecting employers and employees through verified ratings.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {[1, 2, 3].map((step) => (
            <div key={step} className="space-y-4 text-center lg:text-left">
              <div className="flex h-12 w-12 mx-auto lg:mx-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                <span className="font-bold text-lg">{step}</span>
              </div>
              <h3 className="text-xl font-bold">
                {step === 1
                  ? "Employer Verification"
                  : step === 2
                  ? "Employee Profiles"
                  : "Ratings & Recommendations"}
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                {step === 1
                  ? "Employers are verified to ensure legitimacy."
                  : step === 2
                  ? "Employees create profiles with work history."
                  : "Employers provide ratings and recommendations."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
