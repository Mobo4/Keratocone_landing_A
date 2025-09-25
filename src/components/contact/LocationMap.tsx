
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const LocationMap = () => {
  const { t } = useTranslation();
  const { phoneNumber, phoneHref } = useCallRailPhone();
  
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-6">{t('contact.location.title', 'Our Location')}</h2>
        
        <div className="aspect-video rounded-md overflow-hidden mb-6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.009664953629!2d-117.83902378431022!3d33.76762308059171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9a82ad65f15%3A0x42f8678daa3c4a09!2s801%20N%20Tustin%20Ave%20%23404%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1620241926004!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="Office Location Map" 
          />
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-eyecare-blue mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-left">{t('contact.location.address', 'Address')}</h3>
              <p className="text-gray-600 text-left">
                801 North Tustin Ave #404<br />
                Santa Ana, CA 92705
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-eyecare-blue mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-left">{t('contact.location.phone', 'Phone')}</h3>
              <p className="text-gray-600">
                <a href={phoneHref} className="hover:text-eyecare-blue transition-colors callrail-phone">
                  {phoneNumber}
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-eyecare-blue mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-left">{t('contact.location.email', 'Email')}</h3>
              <p className="text-gray-600">
                <a href="mailto:eyecarecenteroc@gmail.com" className="hover:text-eyecare-blue transition-colors">
                  eyecarecenteroc@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-eyecare-blue mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-left">{t('contact.location.hours', 'Hours')}</h3>
              <p className="text-gray-600 text-left">
                {t('contact.location.mondayToThursday', 'Monday - Thursday')}: 9am - 6pm<br />
                {t('contact.location.friday', 'Friday')}: 9am - 5pm<br />
                {t('contact.location.saturday', 'Saturday')}: {t('contact.location.byAppointment', 'By Appointment Only')}<br />
                {t('contact.location.sunday', 'Sunday')}: {t('contact.location.closed', 'Closed')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <AppointmentRequestDialog>
            <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors inline-block hover:scale-105 transform duration-300">
              {t('contact.location.scheduleButton', 'Schedule an Appointment')}
            </button>
          </AppointmentRequestDialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationMap;
