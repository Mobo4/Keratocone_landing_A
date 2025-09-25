import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnalytics } from '@/hooks/useAnalytics';
import { BarChart, Users, Globe, Monitor, Smartphone, Tablet } from 'lucide-react';

const AnalyticsDashboard = () => {
  const { getSessionSummary } = useAnalytics();
  const summary = getSessionSummary();

  const deviceIcons = {
    Desktop: Monitor,
    Mobile: Smartphone,
    Tablet: Tablet
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.totalSessions}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">USA Sessions</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.usaSessions}</div>
            <p className="text-xs text-muted-foreground">
              {summary.totalSessions > 0 
                ? `${((summary.usaSessions / summary.totalSessions) * 100).toFixed(1)}% of total`
                : '0%'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Browser</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Object.entries(summary.browsers).sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Device</CardTitle>
            <Monitor className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Object.entries(summary.devices).sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Browser Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Browser Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(summary.browsers).map(([browser, count]) => (
              <div key={browser} className="flex items-center justify-between">
                <span className="text-sm">{browser}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-eyecare-blue h-2 rounded-full" 
                      style={{ width: `${(count / summary.totalSessions) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-12 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Device Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Device Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(summary.devices).map(([device, count]) => {
              const Icon = deviceIcons[device as keyof typeof deviceIcons] || Monitor;
              return (
                <div key={device} className="text-center">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-eyecare-blue" />
                  <p className="text-sm font-medium">{device}</p>
                  <p className="text-2xl font-bold">{count}</p>
                  <p className="text-xs text-muted-foreground">
                    {((count / summary.totalSessions) * 100).toFixed(1)}%
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle>Top Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {summary.topPages.slice(0, 5).map(({ page, views }) => (
              <div key={page} className="flex items-center justify-between">
                <span className="text-sm">{page}</span>
                <span className="text-sm font-medium">{views} views</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top USA Cities */}
      <Card>
        <CardHeader>
          <CardTitle>Top USA Cities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {summary.topCities.length > 0 ? (
              summary.topCities.slice(0, 5).map(({ city, count }) => (
                <div key={city} className="flex items-center justify-between">
                  <span className="text-sm">{city}</span>
                  <span className="text-sm font-medium">{count} sessions</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No USA city data available</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;