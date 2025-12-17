import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  ExternalLink, 
  BarChart3, 
  Filter, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowLeft 
} from 'lucide-react';

const ElectronicsSalesDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showVideo, setShowVideo] = useState(false);

  const dashboardFeatures = [
    { icon: <Filter />, title: 'Interactive Filters', desc: 'Region, time period, product category' },
    { icon: <TrendingUp />, title: 'Sales Trend Analysis', desc: 'Monthly/quarterly growth patterns' },
    { icon: <Users />, title: 'Customer Segmentation', desc: 'High-value vs regular customers' },
    { icon: <DollarSign />, title: 'Revenue Metrics', desc: 'Profit margins, discounts, returns' },
  ];

  const dashboardScreenshots = [
    { title: 'Overall Dashboard', desc: 'Complete view with KPIs' },
    { title: 'Regional Analysis', desc: 'Sales by state/city' },
    { title: 'Product Performance', desc: 'Top-selling electronics' },
    { title: 'Time Analysis', desc: 'Monthly trends & forecasting' },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
      
      {/* Project Header */}
      <div className="p-8 border-b border-gray-100 dark:border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-4">
              <BarChart3 className="h-4 w-4 mr-2" />
              <span className="font-medium">Power BI Dashboard</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Electronics Sales Dashboard
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl">
              Interactive Power BI dashboard analyzing electronics sales data across multiple regions 
              with drill-down capabilities, customer segmentation, and sales forecasting.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              <Play className="h-4 w-4 mr-2" />
              {showVideo ? 'View Dashboard' : 'Watch Demo'}
            </button>
            <a
              href="/projects/electronics-sales-dashboard.pbix"
              download="Electronics_Sales_Dashboard.pbix"
              className="flex items-center px-5 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg font-medium transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download .pbix
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
                  src="/videos/electronics-dashboard-demo.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video info and controls */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Electronics Sales Dashboard Demo
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  2-minute walkthrough • Power BI • Interactive Filters
                </p>
              </div>
              <a 
                href="/videos/electronics-dashboard-demo.mp4" 
                download
                className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition"
              >
                ⬇️ Download Video
              </a>
            </div>
            
            <button
              onClick={() => setShowVideo(false)}
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
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
                    <div className="text-blue-600 dark:text-blue-400 mb-3">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technical Details */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Implementation</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Power BI Desktop', 'DAX Formulas', 'Power Query', 'Data Modeling', 'SQL', 'Excel'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Key Metrics Tracked</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                      <span>Total Sales: ₹27.4 crore (2024)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Top Region: North (27% of sales)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span>Best Product: Laptop</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">70%</div>
                  <p className="text-gray-700 dark:text-gray-300">Reduced manual reporting time</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15%</div>
                  <p className="text-gray-700 dark:text-gray-300">Sales growth in identified regions</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                  <p className="text-gray-700 dark:text-gray-300">Real-time data accessibility</p>
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
                Completed & Deployed
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Live Dashboard (Power BI Service)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsSalesDashboard;