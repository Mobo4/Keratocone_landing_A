import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Shield, AlertCircle, RefreshCw } from 'lucide-react';
import GeoAccessService from '@/services/geoAccessService';

const GeoAccessDashboard = () => {
  const [locationData, setLocationData] = useState<{
    country: string;
    region: string;
    city: string;
    latitude: number;
    longitude: number;
    timezone: string;
    ip: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [accessStatus, setAccessStatus] = useState<{
    allowed: boolean;
    reason?: string;
  } | null>(null);

  const loadLocationData = async () => {
    setIsLoading(true);
    try {
      const geoService = GeoAccessService.getInstance();
      const result = await geoService.checkAccess();
      
      setLocationData(result.location);
      setAccessStatus({
        allowed: result.allowed,
        reason: result.reason
      });
    } catch (error) {
      console.error('Error loading location:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadLocationData();
  }, []);

  const testLocation = async (location: {
    country: string;
    region: string;
    city: string;
    latitude: number;
    longitude: number;
  }) => {
    const geoService = GeoAccessService.getInstance();
    await geoService.setTestLocation(location);
    await loadLocationData();
  };

  const clearTestLocation = async () => {
    const geoService = GeoAccessService.getInstance();
    geoService.clearCache();
    await loadLocationData();
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Geographic Access Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-4">
            <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
            <p>Loading location data...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Current Location */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Current Location
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-600">Country:</span>{' '}
                  <span className="font-medium">{locationData?.country || 'Unknown'}</span>
                </div>
                <div>
                  <span className="text-gray-600">State:</span>{' '}
                  <span className="font-medium">{locationData?.region || 'Unknown'}</span>
                </div>
                <div>
                  <span className="text-gray-600">City:</span>{' '}
                  <span className="font-medium">{locationData?.city || 'Unknown'}</span>
                </div>
                <div>
                  <span className="text-gray-600">IP:</span>{' '}
                  <span className="font-medium">{locationData?.ip || 'Unknown'}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Coordinates:</span>{' '}
                  <span className="font-medium">
                    {locationData?.latitude}, {locationData?.longitude}
                  </span>
                </div>
              </div>
            </div>

            {/* Access Status */}
            <div className={`p-4 rounded-lg ${accessStatus?.allowed ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center gap-2">
                {accessStatus?.allowed ? (
                  <>
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900">Access Granted</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <span className="font-medium text-red-900">
                      Access Denied: {accessStatus?.reason?.replace(/_/g, ' ')}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Test Locations */}
            {process.env.NODE_ENV === 'development' && (
              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Test Locations (Dev Only)</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => testLocation({
                      country: 'United States',
                      region: 'California',
                      city: 'Los Angeles',
                      latitude: 34.0522,
                      longitude: -118.2437
                    })}
                  >
                    Los Angeles, CA
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => testLocation({
                      country: 'United States',
                      region: 'New York',
                      city: 'New York',
                      latitude: 40.7128,
                      longitude: -74.0060
                    })}
                  >
                    New York, NY
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => testLocation({
                      country: 'Canada',
                      region: 'Ontario',
                      city: 'Toronto',
                      latitude: 43.6532,
                      longitude: -79.3832
                    })}
                  >
                    Toronto, Canada
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => testLocation({
                      country: 'United States',
                      region: 'California',
                      city: 'San Francisco',
                      latitude: 37.7749,
                      longitude: -122.4194
                    })}
                  >
                    San Francisco, CA
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={clearTestLocation}
                    className="col-span-2"
                  >
                    Clear Test Location
                  </Button>
                </div>
              </div>
            )}

            {/* Refresh Button */}
            <Button
              onClick={loadLocationData}
              variant="outline"
              className="w-full"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Location
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GeoAccessDashboard;