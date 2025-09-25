
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Calendar } from 'lucide-react';
import AppointmentForm from './AppointmentForm';

interface AppointmentRequestDialogProps {
  children: React.ReactNode;
}

const AppointmentRequestDialog = ({ children }: AppointmentRequestDialogProps) => {
  const { t } = useTranslation();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-4xl max-h-[95vh] overflow-hidden">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-xl">
            <Calendar className="w-6 h-6 text-blue-600" />
            👑 Request Expert Keratoconus Consultation
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
              <p className="font-semibold text-blue-900">🎯 Orange County's Leading Keratoconus Authority</p>
              <p className="text-blue-800">Join the thousands who've achieved crystal-clear vision with our advanced scleral lens and crosslinking expertise.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <p className="font-semibold text-purple-900">⭐ Concierge-Level Care for Discerning Patients</p>
              <p className="text-purple-800">Extended consultation times, personalized treatment plans, and direct access to Dr. Bonakdar - when others say "nothing can be done," we deliver results.</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <AppointmentForm onClose={() => {}} />
        
        <AlertDialogFooter>
          <AlertDialogCancel>{t('appointment.cancel', 'Cancel')}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AppointmentRequestDialog;
