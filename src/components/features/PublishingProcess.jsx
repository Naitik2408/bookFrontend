
import { Book, PenTool, FileCheck, Globe, Lightbulb, DollarSign } from 'lucide-react';

const PublishingProcess = () => {
  const processGroups = [
    {
      title: "Preparation Phase",
      icon: Book,
      steps: [
        {
          title: "Registration & Consultation",
          icon: Book,
          description: "Begin with our streamlined onboarding and strategic planning session"
        },
        {
          title: "Design & Formatting",
          icon: PenTool,
          description: "Professional transformation of your manuscript"
        }
      ]
    },
    {
      title: "Production Phase",
      icon: FileCheck,
      steps: [
        {
          title: "Review & Approval",
          icon: FileCheck,
          description: "Collaborative refinement process with experts"
        },
        {
          title: "Global Distribution",
          icon: Globe,
          description: "Worldwide publishing network activation"
        }
      ]
    },
    {
      title: "Post-Publication",
      icon: DollarSign,
      steps: [
        {
          title: "Marketing & Promotion",
          icon: Lightbulb,
          description: "Strategic visibility enhancement campaigns"
        },
        {
          title: "Royalty & Analytics",
          icon: DollarSign,
          description: "Transparent financial tracking system"
        }
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-orange-50 py-28 px-4 border-t border-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="mb-6 inline-flex items-center gap-2 bg-orange-100 px-6 py-2.5 rounded-full">
            <PenTool className="text-orange-600" size={24} />
            <span className="text-orange-600 font-medium text-lg">Structured Workflow</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-5 leading-tight">
            Intelligent <span className="bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
              Publishing Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            A modular approach to publishing success combining precision engineering with creative excellence
          </p>
        </div>

        {/* Process Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {processGroups.map((group, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-50 hover:border-orange-100 transition-all">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center">
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">{group.title}</h3>
              </div>

              <div className="space-y-6">
                {group.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <h4 className="text-lg font-medium text-gray-800">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 font-sans text-sm">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Phase Connector */}
              {index < processGroups.length - 1 && (
                <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-1 bg-orange-100" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-orange-600 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Unified Progress */}
        <div className="mt-20 bg-white p-8 rounded-2xl border-2 border-orange-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900">End-to-End Tracking</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {['Planning', 'Production', 'Distribution'].map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-medium text-gray-800 mb-2">{stage}</div>
                  <div className="h-1 bg-orange-100 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-600 rounded-full transition-all duration-500" 
                      style={{ width: `${(index + 1) * 33}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between text-sm text-gray-600 font-sans">
              <span>Manuscript Submission</span>
              <span>Global Availability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishingProcess;