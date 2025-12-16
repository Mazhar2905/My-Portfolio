import React, { useState } from 'react';
import { Play, Download, ExternalLink, BarChart3, Filter, TrendingUp, Users, DollarSign } from 'lucide-react';

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
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-white mb-4 mx-auto" />
                  <p className="text-white text-lg">Video demo coming soon</p>
                  <p className="text-gray-400">Recording interactive features...</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to dashboard details
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

            {/* Screenshots Gallery */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard Views</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dashboardScreenshots.map((screenshot, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-3 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-1">{index + 1}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">View {index + 1}</div>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{screenshot.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{screenshot.desc}</p>
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
                      <span>Total Sales: ₹42.8L (Q4 2023)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span>Top Region: Maharashtra (32% of sales)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                      <span>Best Product: Smartphones (28% revenue)</span>
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