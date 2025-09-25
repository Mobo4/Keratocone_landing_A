
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Control } from 'react-hook-form';

interface AppointmentFormData {
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
  emailAddress: string;
  insuranceProvider: string;
  insuranceId: string;
  referringDoctor: string;
  preferredDays: string[];
  preferredTime: string;
  visitType: string;
  otherVisitType: string;
  contactMethod: string;
  contactTime: string;
  currentProblems: string;
  currentMedications: string;
  specialRequests: string;
}

interface PatientInfoFieldsProps {
  control: Control<AppointmentFormData>;
}

const PatientInfoFields = ({ control }: PatientInfoFieldsProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-800">{t('appointment.patientInfo.title', 'Patient Information')}</h4>
      
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('appointment.patientInfo.fullName', 'Full Name')}</FormLabel>
            <FormControl>
              <input 
                {...field} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eyecare-blue"
                placeholder={t('appointment.patientInfo.fullNamePlaceholder', 'Enter your full name')}
              />
            </FormControl>
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-3">
        <FormField
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('appointment.patientInfo.phone', 'Phone')}</FormLabel>
              <FormControl>
                <input 
                  {...field} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eyecare-blue"
                  placeholder={t('appointment.patientInfo.phonePlaceholder', 'Phone number')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('appointment.patientInfo.email', 'Email')}</FormLabel>
              <FormControl>
                <input 
                  {...field} 
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eyecare-blue"
                  placeholder={t('appointment.patientInfo.emailPlaceholder', 'Email address')}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default PatientInfoFields;
