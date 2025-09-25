
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Clock, Calendar, Phone, AlertCircle } from 'lucide-react';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const OfficeHours = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();
  const isMobile = useIsMobile();
  
  const scheduleData = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "By Appointment Only" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div>
      <div className="flex items-center mb-4">
        <Clock className="w-6 h-6 text-eyecare-blue mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="space-y-3">
          {scheduleData.map((schedule, index) => (
            <div 
              key={index} 
              className={`flex justify-between py-2 ${
                schedule.day === "Sunday" 
                  ? "text-gray-400" 
                  : "text-gray-700"
              } ${
                index < scheduleData.length - 1 
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <span className="font-medium">{schedule.day}</span>
              <span className="font-semibold">{schedule.hours}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-medium text-red-600">Emergency Care:</span> If you experience sudden vision changes or eye pain, call us immediately at{' '}
                <a href={phoneHref} className="text-red-600 font-semibold hover:underline callrail-phone">
                  {phoneNumber}
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-start space-x-3">
            <Calendar className="h-5 w-5 text-eyecare-blue mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-medium text-eyecare-blue">Scheduling:</span> New patients should arrive 15 minutes early. 
                Same-day appointments may be available for urgent needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeHours;
