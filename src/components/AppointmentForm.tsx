
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PartyPopper } from 'lucide-react';
import { useAppointmentForm } from '@/hooks/useAppointmentForm';
import PatientInfoFields from './appointment/PatientInfoFields';
import AppointmentPreferencesFields from './appointment/AppointmentPreferencesFields';

interface AppointmentFormProps {
  onClose: () => void;
}

const AppointmentForm = ({ onClose }: AppointmentFormProps) => {
  const { t } = useTranslation();
  const { form, preferredDays, pageContext, handleDayChange, handleSubmit } = useAppointmentForm(onClose);

  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          
          {/* Premium keratoconus consultation context */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-2 border-blue-300">
            <div className="text-center">
              <p className="text-lg font-bold text-blue-900">👑 KERATOCONUS EXPERT CONSULTATION</p>
              <p className="text-sm text-gray-700 mt-1">Orange County's most experienced keratoconus authority</p>
              <p className="text-xs text-purple-700 font-semibold mt-2">✨ Concierge-level care • Extended consultation times</p>
            </div>
          </div>
          
          <PatientInfoFields control={form.control} />
          
          <AppointmentPreferencesFields 
            control={form.control}
            preferredDays={preferredDays}
            handleDayChange={handleDayChange}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            👑 REQUEST EXPERT CONSULTATION
          </Button>
          <p className="text-center text-xs text-gray-500 mt-2">
            ⭐ Premium consultation • 🏆 Advanced scleral lens fitting • 🎯 Corneal crosslinking expertise
          </p>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
