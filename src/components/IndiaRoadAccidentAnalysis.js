import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  ExternalLink, 
  AlertTriangle, 
  MapPin, 
  BarChart3, 
  Calendar, 
  Car,
  Users,
  ArrowLeft
} from 'lucide-react';

const IndiaRoadAccidentAnalysis = () => {
  const [showVideo, setShowVideo] = useState(false);

  const dashboardFeatures = [
    { icon: <MapPin />, title: 'Geospatial Analysis', desc: 'Accident hotspots by state and location type' },
    { icon: <Calendar />, title: 'Top state analysis', desc: 'Mentioned state with higher accident rate' },
    { icon: <Car />, title: 'Cause Factors', desc: 'Primary cause of accident' },
    { icon: <Users />, title: '', desc: 'Age groups, gender, severity of injuries' },
  ];

  const dashboardScreenshots = [
    { title: 'National Overview', desc: 'India-wide accident density map' },
    { title: 'State-wise Analysis', desc: 'Comparative analysis by states' },
    { title: 'Time Analysis', desc: 'Hourly, daily, monthly trends' },
    { title: 'Cause Analysis', desc: 'Primary factors contributing to accidents' },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
      
      {/* Project Header */}
      <div className="p-8 border-b border-gray-100 dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span className="font-medium">Public Safety Analytics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              India Road Accident Analysis
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl">
              Comprehensive Power BI dashboard analyzing 3+ years of road accident data across Indian states 
              to identify high-risk zones, causal patterns, and recommend preventive measures.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="flex items-center px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
            >
              <Play className="h-4 w-4 mr-2" />
              {showVideo ? 'View Dashboard' : 'Watch Demo'}
            </button>
            <a
              href="/projects/india-road-accident-analysis.pbix"
              download="India_Road_Accident_Analysis.pbix"
              className="flex items-center px-5 py-3 border-2 border-red-600 text-red-600 dark:text-red-400 dark:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg font-medium transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download .pbix File
            </a>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        {showVideo ? (
          // Video Demo Section
          <div className="mb-8">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
              <video 
                className="w-full h-full object-contain" 
                controls 
                controlsList="nodownload"
              >
                <source 
                  src="/videos/road-accident-demo.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Road Accident Analysis Demo
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  3-minute walkthrough • Power BI • Interactive Maps
                </p>
              </div>
              <a 
                href="/videos/road-accident-demo.mp4" 
                download
                className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition"
              >
                ⬇️ Download Video
              </a>
            </div>
            
            <button
              onClick={() => setShowVideo(false)}
              className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" /> Back to dashboard details
            </button>
          </div>
        ) : (
          // Dashboard Details
          <>
            {/* Features Grid */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
                    <div className="text-red-600 dark:text-red-400 mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>


            {/* Technical Implementation */}
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Power BI Desktop', 'Power Query', 'DAX Formulas', 'Data Modeling', 'Excel', 'Geospatial Analysis'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-800 text-red-700 dark:text-red-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Key Metrics Tracked</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Total Accidents:</strong> 20 lakh (2019-2022)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Top Fatality:</strong> 5.9 lakh (29.5% of total)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Top State:</strong> Tamil Nadu (13.95% accident)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span><strong>Primary Cause:</strong> Overspeeding (60% cases)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business/Policy Impact */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Policy & Safety Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">40%</div>
                  <p className="text-gray-700 dark:text-gray-300">Accidents in identified high-risk zones</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">8</div>
                  <p className="text-gray-700 dark:text-gray-300">Key risk factors identified</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15</div>
                  <p className="text-gray-700 dark:text-gray-300">Preventive policy recommendations</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Project Footer */}
      <div className="border-t border-gray-100 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-medium">Project Status:</span> 
              <span className="ml-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                Completed & Ready for Review
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-red-600 dark:text-red-400 hover:underline flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Download Dataset (CSV)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaRoadAccidentAnalysis;