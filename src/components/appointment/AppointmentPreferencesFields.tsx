
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

interface AppointmentPreferencesFieldsProps {
  control: Control<AppointmentFormData>;
  preferredDays: string[];
  handleDayChange: (day: string, checked: boolean) => void;
}

const AppointmentPreferencesFields = ({ control, preferredDays, handleDayChange }: AppointmentPreferencesFieldsProps) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-800">Appointment Preferences</h4>
      
      <div>
        <FormLabel>Preferred Days</FormLabel>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {days.map((day) => (
            <div key={day} className="flex items-center space-x-2">
              <Checkbox
                id={day}
                checked={preferredDays.includes(day)}
                onCheckedChange={(checked) => handleDayChange(day, !!checked)}
              />
              <label htmlFor={day} className="text-sm">{day}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <FormField
          control={control}
          name="preferredTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Time</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                  <SelectItem value="late-afternoon">Late Afternoon (4 PM - 6 PM)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="visitType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Visit</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select visit type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="comprehensive">Comprehensive Eye Exam</SelectItem>
                  <SelectItem value="contact-lens">Contact Lens Consultation</SelectItem>
                  <SelectItem value="lasik">LASIK Consultation</SelectItem>
                  <SelectItem value="cataract">Cataract Consultation</SelectItem>
                  <SelectItem value="dry-eye">Dry Eye Treatment</SelectItem>
                  <SelectItem value="keratoconus">Keratoconus Treatment</SelectItem>
                  <SelectItem value="ortho-k">Ortho-K Consultation</SelectItem>
                  <SelectItem value="headache-fatigue">Headache & Eye Fatigue</SelectItem>
                  <SelectItem value="eyewear">Eyewear Consultation</SelectItem>
                  <SelectItem value="follow-up">Follow-up Appointment</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AppointmentPreferencesFields;
